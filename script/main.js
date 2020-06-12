"use strict";
let money = +prompt("Ваш месячный доход?", 90);
let income = 'Фриланс';
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


const expensesList = 'Вода, Еда, Фарфор, МРАМОР'
const addExpenses = function() {
return prompt('Перечислите возможные расходы за рассчитываемый период через запятую', expensesList);
}
console.log(addExpenses().split(" "));



let getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};
console.log(getAccumulatedMonth());


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


let month = 30;
let budgetDay = function () {
  return Math.ceil(accumulatedMonth() / 30);
};
console.log(budgetDay());

const getStatusIncome = function() {
  if (budgetDay < 300) {
    return ("К сожалению у вас уровень дохода ниже среднего");
  } else if (budgetDay <= 800) {
    return("У вас средний уровень дохода");
  } else {
    return("Высокий уровень");
  }
};

console.log(getStatusIncome());