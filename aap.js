

let cart = [];
const container = document.getElementById('categories-container');
const card3 = document.getElementById('products-container');
const cartCount = document.getElementById('cart-count');

fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(data => {
        container.innerHTML = `
            <button onclick="filterProducts('all')" style="padding: 10px 20px; background-color: pink; color: white; border: none; margin-left: 20px; cursor: pointer;">All</button>
            ${data.map(category => `
                <button onclick="filterProducts('${category}')" style="padding: 10px 20px; background-color: pink; color: white; border: none; margin-left: 20px; cursor: pointer;">
                    ${category}
                </button>
            `).join('')}
        `;
    })
    .catch(error => console.log(error));

fetchAllProducts();

function fetchAllProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => console.log(error));
}

function displayProducts(products) {
    card3.innerHTML = products.map(product => `
        <div class="w-full md:w-1/3 px-5 mb-5">
            <div class="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div class="h-48 overflow-hidden">
                    <img src="${product.image}" alt="" class="w-full h-full object-contain p-4">
                </div>
                <div class="p-6 flex-grow">
                    <h2 class="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">${product.title}</h2>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-indigo-600">$${product.price}</span>
                        <button onclick="addToCart(${product.id})" class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    if (category === 'all') {
        fetchAllProducts();
    } else {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
            .then(data => {
                displayProducts(data);
            })
            .catch(error => console.log(error));
    }
}

document.getElementById("registrationform").addEventListener("submit", function(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(localStorage.getItem(email)){
        alert("This user already exists");
        return;
    }

    const userData = {
        name: name,
        password: password
    };
    
    localStorage.setItem(email, JSON.stringify(userData));
    alert("Registration successful!");
    window.location.href = "login.html";
});

document.getElementById("login").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("email").value;
    document.getElementById("password").value;

let storedEmail = localStorage.getItem(email);

if(storedEmail === null){
    alert("No user found. Please register first.");
}else if(storedEmail === email && storedPassword === password){
    alert("Login successful!");
    window.location.href = "index.html";
}else{
    alert("Invalid email or password. Please try again.");
}})

