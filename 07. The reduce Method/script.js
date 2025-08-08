'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsed = 1.1;

// The reduce method
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i + 1}: ${acc}`);
  return acc + curr;
}, 0);

console.log(balance);

const balanceArr = movements.reduce((acc, curr, i, arr) => acc + curr, 0);

console.log(balanceArr);

// Finding max num
const maxVal = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
);
console.log(maxVal);
