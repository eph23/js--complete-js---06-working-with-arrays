'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsed = 1.1;

// The method chaining
const total = movements
  .filter(movement => movement > 0)
  .map(movement => movement * 1.1)
  .reduce((acc, curr) => acc + curr, 0);
console.log(total);
