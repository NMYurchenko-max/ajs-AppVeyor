const cashback = {
  // Для стандартного клиента возвращается 1%, для серебряного клиента — 2%, для золотого — 5%.
  regular: {
    bound: 1000,
    percent: 1,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  gold: {
    bound: 100000,
    percent: 5,
  },
};

export default function calculateCashback(amount) {
// функция принимает сумму покупки и возвращает сумму кешбека
  if (amount >= cashback.gold.bound) {
    // если сумма покупки больше или равна 100000, то возвращается 5% от суммы покупки
    return Math.ceil(amount * cashback.gold.percent / 100);
  }

  if (amount >= cashback.silver.bound) {
  // если сумма покупки больше или равна 10000, то возвращается 2% от суммы покупки
    return Math.ceil(amount * cashback.silver.percent / 100);
  }

  if (amount >= cashback.regular.bound) {
      // если сумма покупки больше или равна 1000, то возвращается 1% от суммы покупки
    return Math.ceil(amount * cashback.regular.percent / 100);
  }

  return 0;
  // если сумма покупки меньше 1000, то возвращается 0
}
