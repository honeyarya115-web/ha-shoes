// CART COUNT
function updateCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = document.getElementById("count");
  if (count) count.innerText = cart.length;
}
updateCount();

// ADD TO CART
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
  alert("Added!");
}

// SHOW CART
if (document.getElementById("cartContainer")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cartContainer");
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    container.appendChild(div);
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

// REMOVE
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// CHECKOUT
function checkout() {
  alert("Payment Done ✅ (Demo)");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// LOGIN SYSTEM
function signup() {
  localStorage.setItem("user", username.value);
  localStorage.setItem("pass", password.value);
  msg.innerText = "Signup success!";
}

function login() {
  if (
    username.value === localStorage.getItem("user") &&
    password.value === localStorage.getItem("pass")
  ) {
    msg.innerText = "Login success!";
  } else {
    msg.innerText = "Wrong!";
  }
}

// WISHLIST
function addToWishlist(item) {
  alert(item + " added to ❤️ wishlist");
}