"use strict";

const findBestEmployee = function (employees) {
  //Вариант 1:
  const days = Object.values(employees);
  let total = 0;

  for (let i = 0; i < days.length; i += 1) {
    total < days[i] ? (total = days[i]) : total;
  }

  for (const key in employees) {
    if (employees[key] === total) {
      return key;
    }
  }

  //Вариант 2:
  // const days = Object.values(employees);

  // for (const key in employees) {
  //   if (employees[key] === Math.max(...days)) {
  //     return key;
  //   }
  // }
};

/*
 * Вызовы функции для проверки работоспособности реализации:
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
