
function calculateDiscountedPrice(quantity, pricePerItem) {
debugger;   
    let totalPrice = 0;
    debugger
    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
       debugger 
       totalPrice *= 0.9;
    }

    
    debugger
    return totalPrice;
}
console.log(calculateDiscountedPrice(5, 10))

module.exports = calculateDiscountedPrice;
