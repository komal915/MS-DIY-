// Function to add a product to the cart
function addToCart(productName, price, imageUrl) {
    // Get cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Create a new item object
    const newItem = {
      product: productName,
      price: price,
      image: imageUrl
    };
  
    // Add the new item to the cart
    cartItems.push(newItem);
  
    // Update the cart count
    document.getElementById('cart-count').innerText = cartItems.length;
  
    // Save the updated cart items to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }
  