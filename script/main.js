'use strict';

const money = +prompt('Ваш месячный доход?');
// console.log(money);

// const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// console.log(addExpenses);

// const deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);

// const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?');
// const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?');

const budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth); 

const mission = 