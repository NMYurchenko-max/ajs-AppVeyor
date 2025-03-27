export function calculateTotal(items) {
  return items.reduce((acc, item) => acc + item.price * item.count, 0);
}

export function calculateSum(purchases) {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].count * purchases[i].price;
  }
  return sum;
}

export function calculateTotalWithDiscount(purchases, applyDiscount) {
  const sum = purchases.reduce(
    (total, item) => total + item.price * item.count,
    0,
  );
  if (applyDiscount) {
    return sum - sum * 0.5;
  }
  return sum;
}
