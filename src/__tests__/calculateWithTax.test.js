import calculateTotalWithDiscountAndTax from "../calculateWithTax";

describe("Тестирование функции calculateTotalWithDiscountAndTax", () => {
  const items = [
    { name: "Item 1", price: 10, count: 2 },
    { name: "Item 2", price: 15, count: 1 },
    { name: "Item 3", price: 5, count: 1 },
  ];

  const testCases = [
    {
      description: "Без скидки и налога",
      discount: 0,
      taxRate: 0,
      expectedTotal: 40,
    },
    {
      description: "Со скидкой 50% и без налога",
      discount: 0.5,
      taxRate: 0,
      expectedTotal: 20,
    },
    {
      description: "Со скидкой 50% и налогом 10%",
      discount: 0.5,
      taxRate: 0.1,
      expectedTotal: 22,
    },
    {
      description: "Со скидкой 50% и налогом 20%",
      discount: 0.5,
      taxRate: 0.2,
      expectedTotal: 24,
    },
  ];

  testCases.forEach(({ description, discount, taxRate, expectedTotal }) => {
    it(description, () => {
      const total = calculateTotalWithDiscountAndTax(items, discount, taxRate);
      expect(total).toBeCloseTo(expectedTotal, 2);
    });
  });
});
