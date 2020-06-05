const money = 500;
const income = 100;
const addExpenses = 'Вода, Еда, Фарфор, МРАМОР';
const deposit = true;
const mission = 1000;
const period = 10;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' юани');

console.log(addExpenses.toLowerCase().split(' '));

const budgetDay = income / 30;
console.log(budgetDay);


