export default function calculateTotalWithDiscountAndTax(purchases, discount, taxRate) {
    const sum = purchases.reduce((total, item) => total + item.price * item.count, 0);
    let total = sum;

    // Log the initial sum
    console.log('Сумма:', sum);

    // Apply tax first
    if (taxRate) {
        total += total * taxRate;
        // Log the total after applying tax
        console.log('Сумма с налогом:', total);
    }

    // Then apply discount
    if (discount) {
        total -= total * discount;
        // Log the total after applying discount
        console.log('Сумма со скидкой:', total);
    }

    return total;
}
