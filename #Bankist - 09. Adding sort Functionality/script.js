'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/* ================= Movements ================ */
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  /* ****************************************** */
  /*                   SORTING                  */
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  /* ****************************************** */

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${movement}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
/* ================= Movements ================ */

/* ============== Display Balance ============= */
const calcAndDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (account, curr) => account + curr,
    0
  );
  labelBalance.textContent = `${account.balance} EUR`;
};
/* ============== Display Balance ============= */

/* ============== Display Summery ============= */
const calcDisplaySummery = function (account) {
  const income = account.movements
    .filter(movement => movement > 0)
    .reduce((account, curr) => account + curr, 0);

  const out = account.movements
    .filter(movement => movement < 0)
    .reduce((account, curr) => account + curr, 0);

  const interest = account.movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((account, curr) => account + curr, 0);

  labelSumIn.textContent = `${income}`;
  labelSumOut.textContent = `${Math.abs(out)}`;
  labelSumInterest.textContent = `${Math.abs(interest)}`;
};
/* ============== Display Summery ============= */

/* ============ Create User Name ============ */
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
/* ============= Create User Name ============= */

/* ******************************************** */
/*                   UPDATE UI                  */
const updateUI = function (account) {
  // display movements
  displayMovements(account.movements);
  // display balance
  calcAndDisplayBalance(account);
  // display summery
  calcDisplaySummery(account);
};

/* ******************************************** */

/* ================ User Login ================ */
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    //  Update ui
    updateUI(currentAccount);
  }
});
/* ================ User Login ================ */

/* ================= Transfer ================= */
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );

  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  updateUI(currentAccount);
});
/* ================= Transfer ================= */

/* ******************************************** */
/*                  LOAN AMOUNT                 */
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(movement => movement >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

/* ******************************************** */

/* =============== Close Account ============== */
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    currentAccount.pin === Number(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});
/* =============== Close Account ============== */

/* ******************************************** */
/*                    SORTING                   */

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/* ******************************************** */
