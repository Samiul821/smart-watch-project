const ringButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    // console.log(color);
    //    purple add korar age sob guloke check kore purple thakle remove kore dibo abong onno ekta border add kore dibo
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-300");
    }

    // color add korteci
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    // productImage.src = "../images/teal.png";
    productImage.src = "images/" + color + ".png";
  });
}

function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    const button = document.getElementById("size-" + sizes[i]);
    // console.log(button);

    const element = sizes[i];
    if (size === element) {
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
    }
  }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for (let btn of quantityElements) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;

    const quantityElement = document.getElementById("quantity");

    const currentQuantity = parseInt(quantityElement.innerText);

    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityElement.innerText = newQuantity;
  });
}

// add to cart
let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
  const quantity = parseInt(document.getElementById("quantity").innerText);

  if (quantity > 0) {
    document.getElementById("checkout-container").classList.remove("hidden");
    cartCount = cartCount + quantity;

    document.getElementById("cart-count").innerText = cartCount;

    const selectedColorButton = document.querySelector(
      "button.border-purple-600.w-6"
    );
    const selectedColor = selectedColorButton.id.split("-")[0];

    const selectedSizeButton = document.querySelector(
      "button.border-purple-600:not(.w-6)"
    );
    const selectedSize = selectedSizeButton.innerText.split(" ")[0];

    const selectedPrice = selectedSizeButton.innerText
    .split(" ")[1]
    .split("$")[1];

     cartItems.push({
      image: selectedColor + ".png",
      title: "Classy Modern Smart Watch",
      color: selectedColor,
      size: selectedSize,
      price: quantity * parseInt(selectedPrice),
     });
     console.log(cartItems);
  } else {
    alert("Please select a quantity");
  }
});
