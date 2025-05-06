document.addEventListener('DOMContentLoaded', function() {
    // Quantity Selector Functionality
    const quantityInputs = document.querySelectorAll('.quantity');
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const removeButtons = document.querySelectorAll('.remove-item');
    const saveLaterButtons = document.querySelectorAll('.save-later');
    const moveToCartButtons = document.querySelectorAll('.move-to-cart');
    const checkoutButton = document.querySelector('.checkout-btn');
    
    // Update cart count in header
    function updateCartCount() {
        const cartItems = document.querySelectorAll('.cart-item');
        document.querySelector('.cart-count').textContent = cartItems.length;
    }
    
    // Initialize cart count
    updateCartCount();
    
    // Quantity increment
    incrementButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity');
            input.value = parseInt(input.value) + 1;
            updateTotalPrice();
        });
    });
    
    // Quantity decrement
    decrementButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotalPrice();
            }
        });
    });
    
    // Quantity input validation
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (parseInt(this.value) < 1) {
                this.value = 1;
            }
            updateTotalPrice();
        });
    });
    
    // Remove item from cart
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateCartCount();
            updateTotalPrice();
            showToast('Item removed from cart');
        });
    });
    
    // Save item for later
    saveLaterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const itemClone = cartItem.cloneNode(true);
            
            // Modify the cloned item for saved section
            const savedItem = document.createElement('div');
            savedItem.className = 'saved-item';
            
            const img = itemClone.querySelector('.item-image').innerHTML;
            const title = itemClone.querySelector('.item-title').textContent;
            const currentPrice = itemClone.querySelector('.current-price').textContent;
            const originalPrice = itemClone.querySelector('.original-price').textContent;
            const discount = itemClone.querySelector('.discount').textContent;
            
            savedItem.innerHTML = `
                ${img}
                <div class="saved-details">
                    <h4>${title}</h4>
                    <div class="saved-price">
                        <span>${currentPrice}</span>
                        <span>${originalPrice}</span>
                        <span>${discount}</span>
                    </div>
                    <button class="move-to-cart">Move to Cart</button>
                </div>
            `;
            
            document.querySelector('.saved-items').appendChild(savedItem);
            cartItem.remove();
            updateCartCount();
            updateTotalPrice();
            showToast('Item saved for later');
            
            // Add event listener to the new move to cart button
            savedItem.querySelector('.move-to-cart').addEventListener('click', function() {
                moveToCart(this.closest('.saved-item'));
            });
        });
    });
    
    // Move to cart from saved items
    function moveToCart(savedItem) {
        const savedDetails = savedItem.querySelector('.saved-details');
        const title = savedDetails.querySelector('h4').textContent;
        const prices = savedDetails.querySelector('.saved-price');
        const currentPrice = prices.querySelector('span:first-child').textContent;
        const originalPrice = prices.querySelector('span:nth-child(2)').textContent;
        const discount = prices.querySelector('span:last-child').textContent;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${savedItem.querySelector('img').src}" alt="Product Image">
            </div>
            <div class="item-details">
                <h3 class="item-title">${title}</h3>
                <p class="item-seller">Sold by: Meesho Seller</p>
                <div class="item-price">
                    <span class="current-price">${currentPrice}</span>
                    <span class="original-price">${originalPrice}</span>
                    <span class="discount">${discount}</span>
                </div>
                <div class="item-actions">
                    <div class="quantity-selector">
                        <button class="decrement">-</button>
                        <input type="number" value="1" min="1" class="quantity">
                        <button class="increment">+</button>
                    </div>
                    <button class="remove-item">Remove</button>
                    <button class="save-later">Save for later</button>
                </div>
            </div>
        `;
        
        document.querySelector('.cart-items').appendChild(cartItem);
        savedItem.remove();
        updateCartCount();
        updateTotalPrice();
        showToast('Item moved to cart');
        
        // Add event listeners to the new cart item
        addCartItemEventListeners(cartItem);
    }
    
    // Add event listeners to a cart item
    function addCartItemEventListeners(cartItem) {
        cartItem.querySelector('.increment').addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity');
            input.value = parseInt(input.value) + 1;
            updateTotalPrice();
        });
        
        cartItem.querySelector('.decrement').addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotalPrice();
            }
        });
        
        cartItem.querySelector('.quantity').addEventListener('change', function() {
            if (parseInt(this.value) < 1) {
                this.value = 1;
            }
            updateTotalPrice();
        });
        
        cartItem.querySelector('.remove-item').addEventListener('click', function() {
            cartItem.remove();
            updateCartCount();
            updateTotalPrice();
            showToast('Item removed from cart');
        });
        
        cartItem.querySelector('.save-later').addEventListener('click', function() {
            const itemClone = cartItem.cloneNode(true);
            
            const savedItem = document.createElement('div');
            savedItem.className = 'saved-item';
            
            const img = itemClone.querySelector('.item-image').innerHTML;
            const title = itemClone.querySelector('.item-title').textContent;
            const currentPrice = itemClone.querySelector('.current-price').textContent;
            const originalPrice = itemClone.querySelector('.original-price').textContent;
            const discount = itemClone.querySelector('.discount').textContent;
            
            savedItem.innerHTML = `
                ${img}
                <div class="saved-details">
                    <h4>${title}</h4>
                    <div class="saved-price">
                        <span>${currentPrice}</span>
                        <span>${originalPrice}</span>
                        <span>${discount}</span>
                    </div>
                    <button class="move-to-cart">Move to Cart</button>
                </div>
            `;
            
            document.querySelector('.saved-items').appendChild(savedItem);
            cartItem.remove();
            updateCartCount();
            updateTotalPrice();
            showToast('Item saved for later');
            
            savedItem.querySelector('.move-to-cart').addEventListener('click', function() {
                moveToCart(savedItem);
            });
        });
    }
    
    // Update total price calculation
    function updateTotalPrice() {
        let totalMRP = 0;
        let totalDiscount = 0;
        
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').value);
            const currentPrice = parseFloat(item.querySelector('.current-price').textContent.replace('₹', ''));
            const originalPrice = parseFloat(item.querySelector('.original-price').textContent.replace('₹', ''));
            
            totalMRP += originalPrice * quantity;
            totalDiscount += (originalPrice - currentPrice) * quantity;
        });
        
        const totalAmount = totalMRP - totalDiscount;
        
        document.querySelector('.price-row:nth-child(1) span:last-child').textContent = `₹${totalMRP.toFixed(2)}`;
        document.querySelector('.price-row:nth-child(2) span:last-child').textContent = `-₹${totalDiscount.toFixed(2)}`;
        document.querySelector('.total-amount span:last-child').textContent = `₹${totalAmount.toFixed(2)}`;
    }
    
    // Initialize move to cart buttons in saved items
    moveToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            moveToCart(this.closest('.saved-item'));
        });
    });
    
    // Checkout button click
    checkoutButton.addEventListener('click', function() {
        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length === 0) {
            showToast('Your cart is empty!', 'error');
        } else {
            showToast('Proceeding to checkout...');
            // In a real app, you would redirect to checkout page
        }
    });



} )
