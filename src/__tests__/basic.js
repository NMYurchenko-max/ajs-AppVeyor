// Импортируйте обе функции из расчеты.js
// const { calculateTotal, calculateSum } = require("../src/calculate");
import { calculateTotal, calculateSum, calculateTotalWithDiscount } from "../calculate";

// Тест на CalculateTotal
test('calculateTotal корректно вычисляет общую стоимость товаров', () => {
  const items = [
    { name: "Item 1", price: 10, count: 2 },
    { name: "Item 2", price: 15, count: 1 },
    { name: "Item 3", price: 5, count: 3 },
  ];

  const result = calculateTotal(items);
  expect(result).toBe(50); // Проверяем, что результат равен 50
});

// Тест на расчеты
test('calculateSum корректно вычисляет общую стоимость покупок', () => {
  const list = [
    { id: 456, name: "Война и мир", price: 400, count: 3 },
    { id: 123, name: "Мастер и Маргарита", price: 900, count: 2 },
    { id: 789, name: "Преступление и наказание", price: 500, count: 3 },
  ];

  const result = calculateSum(list);
  expect(result).toBe(4500); // Проверяем, что результат равен 4500
});

// Тест на расчет стоимости с учетом скидки
test('calculateTotalWithDiscount корректно вычисляет общую стоимость товаров с учетом скидки', () => {
  const items = [
    { name: "Item 1", price: 101, count: 3 },
    { name: "Item 2", price: 15, count: 1 },
    { name: "Item 3", price: 5, count: 3 },
  ];
  const discount = 0.5;

  const result = calculateTotalWithDiscount(items, discount);
  expect(result).toBeCloseTo(166.5);
  // Проверяем, что результат равен значению 166,5 с плавающей точкой, (с учетом скидки)
});

// Тест на пустой массив
test('calculateTotalWithDiscount корректно обрабатывает пустой массив', () => {
  const items = [];

  const result = calculateTotalWithDiscount(items, true);
  expect(result).toBe(0); // Проверяем, что результат равен 0 для пустого массива
});

// Тест на calculateTotalWithDiscount без скидки
test('calculateTotalWithDiscount корректно возвращает сумму без скидки', () => {
  const items = [
    { name: "Item 1", price: 10, count: 2 },
    { name: "Item 2", price: 15, count: 1 },
    { name: "Item 3", price: 5, count: 3 },
  ];

  const result = calculateTotalWithDiscount(items, 0); // Передаем 0, чтобы не применять скидку
  expect(result).toBe(50); // Проверяем, что результат равен 50 без скидки
});
