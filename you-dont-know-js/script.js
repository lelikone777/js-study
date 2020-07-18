'use strict';

let startButton = document.getElementById('start');
let buttonPlus1 = document.getElementsByTagName('button')[0];
let buttonPlus2 = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let additionalIncomeItems = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('buget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let getAccumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpenses = document.querySelector('.additional_expenses');
let periodSelect = document.querySelector('.period-select');


// let books = document.querySelectorAll('.books');
// console.log(books);

let book = document.querySelectorAll('.book');
console.log(book);

book[0].before(book[1]);
book[2].before(book[4]);
book[5].before(book[2]);
book[2].before(book[5]);

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

book[4].children[0].children[0].textContent = 'Книга 3. this и Прототипы Объектов';

let adv = document.querySelector('.adv');
adv.remove();



let book2Chapters = book[0].children[1].children;
console.log(book2Chapters);

book2Chapters[10].before(book2Chapters[2]);
book2Chapters[5].after(book2Chapters[6]);
book2Chapters[8].before(book2Chapters[6]);
book2Chapters[2].after(book2Chapters[6]);
book2Chapters[2].after(book2Chapters[6]);

let book5Chapters = book[5].children[1].children;
console.log(book5Chapters);

book5Chapters[1].after(book5Chapters[9]);
book5Chapters[5].after(book5Chapters[3]);
book5Chapters[8].after(book5Chapters[6]);

let book6Chapters = book[2].children[1].children;
console.log(book6Chapters);
let newChapter = document.createElement('li');
book6Chapters[8].append(newChapter);
newChapter.textContent = 'Глава 8: За пределами ES6';