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
console.log(book[0]);
console.log(book[1]);
// book[0].remove();
// book[2].remove();
book[0].before(book[1]);
book[5].prepend(book[2]);

