const calculateDiscount = (price, discountPercent) => price * (1 - discountPercent / 100)
const calculateTax = (priceAfterDiscount, taxPercent) => priceAfterDiscount * taxPercent / 100
const calculateFinalPrice = (price, discountPercent, taxPercent) => (
    calculateTax(calculateDiscount(price, discountPercent), taxPercent) +
    calculateDiscount(price, discountPercent))
const createPriceSummary = (price, discountPercent, taxPercent) => ({
    price: price,
    discount: discountPercent,
    tax: calculateTax(calculateDiscount(price, discountPercent), taxPercent),
    finalPrice: calculateFinalPrice(price, discountPercent, taxPercent)
})

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));