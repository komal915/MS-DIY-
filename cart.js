// Retrieve cart items from local storage
var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items on the cart page
var productDetails = document.getElementById('product-details');
if (cartItems.length > 0) {
    productDetails.innerHTML = ''; // Clear existing content
    cartItems.forEach((item, index) => {
        var productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <img src="${item.image}" alt="${item.product}">
            <div class="product-details">
                <h3>${item.product}</h3>
                <p>Price: ${item.price}</p>
            </div>
            <button onclick="removeProduct(${index})">Remove</button>
        `;
        productDetails.appendChild(productElement);
    });
} else {
    productDetails.innerHTML = '<p>No items in the cart</p>';
}

// Function to remove a product from the cart
function removeProduct(index) {
    // Remove the product at the specified index from the cartItems array
    cartItems.splice(index, 1);
    
    // Update the cart items in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Re-render the cart items to reflect the changes
    renderCartItems();
}

// Function to re-render the cart items after removing a product
function renderCartItems() {
    if (cartItems.length > 0) {
        productDetails.innerHTML = ''; // Clear existing content
        cartItems.forEach((item, index) => {
            var productElement = document.createElement('div');
            productElement.classList.add('cart-item');
            productElement.innerHTML = `
                <img src="${item.image}" alt="${item.product}">
                <div class="product-details">
                    <h3>${item.product}</h3>
                    <p>Price: ${item.price}</p>
                </div>
                <button onclick="removeProduct(${index})">Remove</button>
            `;
            productDetails.appendChild(productElement);
        });
    } else {
        productDetails.innerHTML = '<p>No items in the cart</p>';
    }
}
