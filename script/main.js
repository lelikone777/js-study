"use strict";

const income = 100;
const mission = 100;
const period = 10;
// console.log(typeof income);
// console.log("Период равен " + period + " месяцев");
// console.log("Цель заработать " + mission + " юани");

const money = +prompt("Ваш месячный доход?", 90);
// console.log("Ваш месячный доход: " + money);
// console.log(typeof money);

//  const addExpenses = prompt(
// "Перечислите возможные расходы за рассчитываемый период через запятую",
// "Вода, Еда, Фарфор, МРАМОР"
// // );
// console.log("возможные расходы за рассчитываемый период: " + addExpenses);
// console.log(typeof addExpenses);
// console.log(addExpenses.length);
// console.log(addExpenses.toLowerCase().split(" "));

// const deposit = confirm("Есть ли у вас депозит в банке?");
// console.log(typeof deposit);
// switch (deposit) {
//   case true:
//     console.log("депозит в банке присутсвует");
//     break;
//   case false:
//     console.log("депозита нет");
//     break;
// }

const expenses1 = prompt("Введите обязательную статью расходов?", "Вода");
const amount1 = +prompt("Во сколько это обойдется?", 10);
const expenses2 = prompt("Введите обязательную статью расходов?", "Еда");
const amount2 = +prompt("Во сколько это обойдется?", 30);

// const goal = Math.ceil(mission / budgetMonth);
// console.log("Цель будет достигнута за " + goal + " месяцев");

// const budgetDay = Math.floor(budgetMonth / 30);
// console.log("Бюджет на день: " + budgetDay);

// const addExpenses = 'Вода, Еда, Фарфор, МРАМОР';
// console.log(addExpenses.split(' '));
// lesson4

let showTypeOf = function (qwert) {
  return typeof qwert;
};
console.log(showTypeOf(money));


let getExpensesMonth = function () {
  return amount1 + amount2;
};
console.log(getExpensesMonth());


const expensesList = 'Вода, Еда, Фарфор, МРАМОР'
const addExpenses = function() {
return prompt('Перечислите возможные расходы за рассчитываемый период через запятую', expensesList);
}
console.log(addExpenses().split(" "));


// 2
let getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};
console.log(getAccumulatedMonth());

// 3
let accumulatedMonth = function () {
  return getAccumulatedMonth();
};
console.log(accumulatedMonth());
console.log(typeof accumulatedMonth());
4
let getTargetMonth = function () {
  return mission / accumulatedMonth();
};
console.log(getTargetMonth());

// 5 Удалил budgetMonth

// 6
let month = 30;
let budgetDay = function () {
  return Math.ceil(accumulatedMonth() / 30);
};
console.log(budgetDay());

const getStatusIncome = function() {
  
}
