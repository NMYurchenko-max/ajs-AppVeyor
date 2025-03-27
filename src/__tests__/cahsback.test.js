import calculateCahsback from "../cashback";

test.each([
  // тесты для разных уровней клиентов и разных сумм покупок
  ["gold", 100000, 5000],
  ["silver", 10000, 200],
  ["regular", 1000, 10],
  ["no", 500, 0],
])(
  "should calculate cashback for %s level with %i amount",
  (_, amount, expected) => {
    const result = calculateCahsback(amount);
    expect(result).toBe(expected);
  },
);
