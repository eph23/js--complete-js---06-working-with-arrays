'use strict';

// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log('SLICE');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// Splice
console.log('SPLICE');
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

// Reverse
console.log('REVERSE');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// Concat
console.log('CONCAT');
const letters = arr.concat(arr2);
console.log(letters);

// Join
console.log('JOIN');
console.log(letters.join(' - '));
