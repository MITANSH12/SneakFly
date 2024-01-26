// Index.html
var selectedColor = 'yellow'; // Default color

function redirectToProduct() {
    window.location.href = "product.html";
}

document.getElementById('sneaker-box').addEventListener('click', redirectToProduct);

document.getElementById('color-options').addEventListener('click', function (event) {
    // Stop the click event from reaching the sneaker-box click handler
    event.stopPropagation();

    if (event.target.classList.contains('color-option')) {
        selectedColor = event.target.style.backgroundColor;
        updateSneakerImage();
        updateColorText();
    }
});
        function changeColor(color) {
            selectedColor = color;
            updateSneakerImage();
            updateColorText();
        }
        

        function updateSneakerImage() {
            var sneakerImage = document.getElementById('sneaker-image');
            sneakerImage.src = `jordan4retrothunder_${selectedColor}.png`;
        }

        function updateColorText() {
            var colorText = document.getElementById('color-selected');
            colorText.innerText = `Color: ${capitalizeFirstLetter(selectedColor)}`;
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function addToCart() {
            var itemName = 'Jordan 4 Retro Thunder';
            var selectedSize = document.getElementById("size").value; // Get the selected size
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            var existingItem = cartItems.find(item => item.name === itemName && item.color === selectedColor && item.size === selectedSize);
        
            if (existingItem) {
                // If the item already exists, increment the quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add a new item
                var newItem = { name: itemName, quantity: 1, price: 225, color: selectedColor, size: selectedSize }; // Include the size property
                cartItems.push(newItem);
            }
        
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
        function openCart() {
            window.location.href = 'cart.html';
        }

        // Initial rendering
        updateSneakerImage();
        updateColorText();
    // product.html
    function changeProduct(color) {
        selectedColor = color;
        var productImage = document.getElementById('product-image');
        var productImage2 = document.getElementById('product-image2');
        var colorLabel = document.getElementById('clr-lbl');
    
        colorLabel.innerText = 'Color: ' + capitalizeFirstLetter(color);
        productImage.src = `jordan4retrothunder_${color}.png`;
        productImage2.src = `jordan4retrothunder_${color}2.png`;
    }


    function clrLbl() {
        var selectedSize = document.getElementById("size").value;
        document.getElementById("size-lbl").innerHTML = "Size: " + selectedSize;
    }


    function goBack() {
        window.location.href = 'index.html';
    }