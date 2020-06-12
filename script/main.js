"use strict";
let money = +prompt("Ваш месячный доход?", 90);
let income = "Фриланс";
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 100;
let period = 3;

let showTypeOf = function (qwert) {
  return typeof qwert;
};
console.log(showTypeOf(money));

const expenses1 = prompt("Введите обязательную статью расходов?", "Вода");
const amount1 = +prompt("Во сколько это обойдется?", 10);
const expenses2 = prompt("Введите обязательную статью расходов?", "Еда");
const amount2 = +prompt("Во сколько это обойдется?", 30);

let getExpensesMonth = function () {
  return amount1 + amount2;
};
console.log(getExpensesMonth());

const addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую",
  "Вода, Еда, Фарфор, МРАМОР"
);
console.log("возможные расходы за рассчитываемый период: " + addExpenses);
console.log(typeof addExpenses);
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(" "));

let getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};
console.log(getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);
console.log(typeof accumulatedMonth);

let getTargetMonth = function () {
  return mission / accumulatedMonth;
};
console.log(getTargetMonth());

// 5 Удалил budgetMonth

let month = 30;
let budgetDay = function () {
  return Math.ceil(accumulatedMonth / 30);
};
console.log(budgetDay());

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
