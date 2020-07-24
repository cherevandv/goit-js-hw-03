"use strict";

const countTotalSalary = function (employees) {
  const salary = Object.values(employees);
  let total = 0;

  for (const value of salary) {
    total += value;
  }
  return total;
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
