// Search & Filter
function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.getElementById('productGrid').getElementsByClassName('product-card');
    const selectedCategory = document.getElementById('categoryFilter').value;

    for(let i=0;i<products.length;i++){
        let name = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let category = products[i].getAttribute('data-category');
        if(name.includes(input) && (selectedCategory==='all'||selectedCategory===category)){
            products[i].style.display="";
        } else {
            products[i].style.display="none";
        }
    }
}
function filterProducts(){ searchProducts(); }

// Featured Slider
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
function showSlide(index){
    if(index >= slides.length) slideIndex=0;
    if(index < 0) slideIndex=slides.length-1;
    for(let i=0;i<slides.length;i++){ slides[i].style.display="none"; }
    slides[slideIndex].style.display="block";
}
// Login Function
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simple example: hardcoded username/password
    if(username === "admin" && password === "1234") {
        loginMessage.style.color = "green";
        loginMessage.innerText = "Login successful!";
        document.getElementById('loginForm').reset();
    } else {
        loginMessage.style.color = "red";
        loginMessage.innerText = "Invalid username or password!";
    }

    return false; // prevent page reload
}

function moveSlide(n){ slideIndex+=n; showSlide(slideIndex); }
showSlide(slideIndex);

// Add to Cart Simulation
function addToCart(productName) {
    // product name store (optional)
    localStorage.setItem("selectedProduct", productName);

    // redirect to payment page
    window.location.href = "payment.html";
}
function placeOrder() {
    document.getElementById("orderMsg").style.color = "green";
    document.getElementById("orderMsg").innerText =
        "Order placed successfully! Thank you 💖";

    return false; // stop page reload
}
function placeOrder() {
    document.getElementById("orderMsg").style.color = "green";
    document.getElementById("orderMsg").innerText =
        "Order placed successfully! Thank you 💖";

    return false;
}

