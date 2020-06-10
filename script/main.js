'use strict';
// 1
const income = 100;
const addExpenses = 'Вода, Еда, Фарфор, МРАМОР';
const deposit = true;
const mission = 100;
const period = 10;


// 2
const money = +prompt('Ваш месячный доход?');

// 3
// const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

// 4
// const deposit = confirm('Есть ли у вас депозит в банке?');
// console.log(deposit);

// 5
// const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?');
// const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?');

// 6
const budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth); 

// 7
const goal = Math.ceil(mission / budgetMonth);
console.log(goal);

// 8
const budgetDay = Math.floor(budgetMonth/30);
console.log(budgetDay);

// 9
if (budgetMonth > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetMonth > 600 && budgetMonth < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetMonth  < 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetMonth  < 0) {
  console.log('Что то пошло не так');
} 

