"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "Фриланс";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "Вода, Еда, Фарфор, МРАМОР"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 50000;
let period = 3;

let start = function () {

  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));

};

start();

let showTypeOf = function (item) {
  console.log(typeof item);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(","));


let expenses = [];

let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {

    expenses[i] = prompt("Введите обязательную статью расходов?");
    let promptt = +prompt("Во сколько это обойдется?");
    if (isNumber(promptt)) { sum += promptt }
  }
  console.log(expenses);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log("Расходы за месяц: " + expensesAmount);

let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function () {
  return Math.ceil(mission / accumulatedMonth);
};
if (getTargetMonth() > -1 ) {
console.log("Цель будет достигнута за " + getTargetMonth() + " месяца");
} else {
  console.log('Цель не будет достигнута');
}

let budgetDay = function () {
  return Math.ceil(accumulatedMonth / 30);
};

const getStatusIncome = function () {
  if (accumulatedMonth > 1200) {
    return "У вас высокий уровень дохода";
  } else if (accumulatedMonth > 600 && accumulatedMonth <= 1200) {
    return "У вас средний уровень дохода";
  } else if (accumulatedMonth <= 600 && accumulatedMonth > 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else if (accumulatedMonth <= 0) {
    return "Что то пошло не так";
  }
};
console.log(getStatusIncome());
