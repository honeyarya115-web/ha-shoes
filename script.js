// CART SYSTEM
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}

// SHOW CART
if (document.getElementById("cart")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  let cartList = document.getElementById("cart");

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;
    cartList.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

// FAKE PAYMENT
function checkout() {
  alert("Payment Successful ✅ (Demo Only)");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// SIGNUP
function signup() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  document.getElementById("message").innerText = "Signup Successful!";
}

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let savedUser = localStorage.getItem("user");
  let savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    document.getElementById("message").innerText = "Login Successful!";
  } else {
    document.getElementById("message").innerText = "Wrong Credentials!";
  }
}