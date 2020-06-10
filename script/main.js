'use strict';
// 1
const income = 100;
const mission = 100;
const period = 10;
console.log(typeof income);


// 2
const money = +prompt('Ваш месячный доход?', 90);
console.log(typeof money);
// 3
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Вода, Еда, Фарфор, МРАМОР');

// 4
const deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);

// 5
const expenses1 = prompt('Введите обязательную статью расходов?' , 'Вода');
const amount1 = +prompt('Во сколько это обойдется?', 10);
const expenses2 = prompt('Введите обязательную статью расходов?', 'Еда');
const amount2 = +prompt('Во сколько это обойдется?', 30);

// 6
const budgetMonth = money - (amount1 + amount2);
console.log('Ваш бюджет на месяц: ' + budgetMonth); 

// 7
const goal = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за ' + goal + ' месяцев');

// 8
const budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день: ' + budgetDay);

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

