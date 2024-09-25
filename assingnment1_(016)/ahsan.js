// Cart array to store products
let cart = [];

// 1. Function to add an item to the cart
function addItemToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to the cart.`);
}

// 2. Function to remove an item from the cart by product ID
function removeItemFromCart(productId) {
    const index = cart.findIndex(product => product.id === productId);
    if (index !== -1) {
        const removedProduct = cart.splice(index, 1);
        console.log(`${removedProduct[0].name} has been removed from the cart.`);
    } else {
        console.log(`Product with ID: ${productId} not found in the cart.`);
    }
}

// 3. Function to update the quantity of a product in the cart
function updateItemQuantity(productId, newQuantity) {
    const product = cart.find(product => product.id === productId);
    if (product) {
        product.quantity = newQuantity;
        console.log(`Quantity for ${product.name} has been updated to ${newQuantity}.`);
    } else {
        console.log(`Product with ID: ${productId} not found in the cart.`);
    }
}

// 4. Function to display the cart summary using console.table
function displayCartSummary() {
    const summary = cart
        .filter(product => product.quantity > 0) // Exclude products with 0 quantity
        .map(product => ({
            name: product.name,
            quantity: product.quantity,
            total: product.quantity * product.price
        }));
    
    console.table(summary); // Use console.table() for better output formatting
    return summary;
}

// 5. Function to calculate the total cost of all items in the cart
function calculateTotalCost() {
    const totalCost = cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    console.log(`Total cost: $${totalCost.toFixed(2)}`);
    return totalCost;
}

// 6. Function to apply a discount based on the discount code
function applyDiscount(discountCode) {
    let discount = 0;
    const totalCost = calculateTotalCost();

    switch (discountCode) {
        case 'DISCOUNT10':
            discount = 0.10;
            break;
        case 'DISCOUNT20':
            discount = 0.20;
            break;
        case 'DISCOUNT30':
            discount = 0.30;
            break;
        default:
            console.log("Invalid discount code.");
            return totalCost;
    }

    const discountedTotal = totalCost - (totalCost * discount);
    console.log(`Discount applied: ${discount * 100}%. Total after discount: $${discountedTotal.toFixed(2)}`);
    return discountedTotal;
}

// Example usage:

const product1 = { id: 1, name: 'Laptop', quantity: 1, price: 1000 };
const product2 = { id: 2, name: 'Mouse', quantity: 2, price: 50 };

addItemToCart(product1);
addItemToCart(product2);
displayCartSummary();
updateItemQuantity(2, 3);  // Update quantity of the Mouse
displayCartSummary();
removeItemFromCart(1);     // Remove Laptop
displayCartSummary();
applyDiscount('DISCOUNT20');

