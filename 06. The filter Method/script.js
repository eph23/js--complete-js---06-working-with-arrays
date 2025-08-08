'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsed = 1.1;

// The filter method
const deposits = movements.filter(function (movement) {
  return movement > 0;
});

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(movement => movement < 0);
console.log(withdrawals);

