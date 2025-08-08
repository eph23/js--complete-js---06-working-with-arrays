'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach with Map
console.log('===Map===');
currencies.forEach(function (currency, index) {
  console.log(`${index}: ${currency}`);
});

// forEach with Set
console.log('===Set===');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (currency, index) {
  console.log(`${index}: ${currency}`);
});
