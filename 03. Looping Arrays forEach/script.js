'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-Of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// The forEach method
console.log('===forEach===');
movements.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`MOVEMENT ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`MOVEMENT ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

