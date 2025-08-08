'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsed = 1.1;

// The map method
const movementsUSD = movements.map(function (movement) {
  return movement * euroToUsed;
});

console.log(movements);
console.log(movementsUSD);

// map with arrow function
const movementsUSDarrow = movements.map(movement => movement * euroToUsed);
console.log(movementsUSDarrow);

const movementWithDes = movements.map(
  (movement, index) =>
    `Movement ${index + 1}: You ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}`
);

console.log(movementWithDes);
