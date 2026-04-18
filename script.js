// ADD TO CART
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added!");
}

// SHOW CART
if (document.getElementById("cart")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  let cartList = document.getElementById("cart");

  cart.forEach((item, index) => {
    let li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button>
    `;

    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

// REMOVE ITEM
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// CHECKOUT
function checkout() {
  alert("Payment Successful ✅");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// SIGNUP
function signup() {
  let user = username.value;
  let pass = password.value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  message.innerText = "Signup Done!";
}

// LOGIN
function login() {
  let user = username.value;
  let pass = password.value;

  if (user === localStorage.getItem("user") &&
      pass === localStorage.getItem("pass")) {
    message.innerText = "Login Success!";
  } else {
    message.innerText = "Wrong!";
  }
}