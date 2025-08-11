'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsed = 1.1;

// The findLast method
console.log('===FINDLAST===');
const lastWithdrawal = movements.findLast(movement => movement < 0);
console.log(lastWithdrawal);

const lastLargeWithdrawal = movements.findLast(
  movement => Math.abs(movement) > 50
);
console.log(lastLargeWithdrawal);

// The findLastIndex method
console.log('===FINDLASTINDEX===');
const lastIndex = movements.findLastIndex(movement => movement > 2000);
console.log(lastIndex);
