"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const result = [];

  for (const item of arr) {
    const keys = Object.keys(item);
    for (const key of keys) {
      if (prop === key) {
        result.push(item[prop]);
      }
    }
  }
  return result;
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));
