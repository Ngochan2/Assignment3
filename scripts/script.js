document.addEventListener('DOMContentLoaded', function() {
    //Retrieve elements for quantity button
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    const increaseButtons = document.querySelectorAll('.quantity-increase');
    const quantityNumbers = document.querySelectorAll('.quantity-number');
    
    //Creating the function to decrease the quantity
    function decreaseQuantity(index) {
        const quantityNumber = quantityNumbers[index];
        let currentValue = parseInt(quantityNumber.textContent);
        if (currentValue > 0) {
            quantityNumber.textContent = currentValue - 1;
        }
    }
    
    //Creating the function to increase the quantity
    function increaseQuantity(index) {
        const quantityNumber = quantityNumbers[index];
        let currentValue = parseInt(quantityNumber.textContent);
        quantityNumber.textContent = currentValue + 1;
    }
    
    //Adding click functions to decrease buttons
    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            decreaseQuantity(index);
    });
});

    //Adding click functions to increase buttons
    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            increaseQuantity(index);
        })
    })
});
