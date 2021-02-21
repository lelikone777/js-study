"use strict";

let money = +prompt("Ваш месячный доход?");
let income = "freelance";
let addExpenses = prompt(
  "“Перечислите возможные расходы за рассчитываемый период через запятую”"
);
let deposit = confirm("“Есть ли у вас депозит в банке?”");

let expenses1 = prompt("“Введите обязательную статью расходов?”");
let amount1 = +prompt("“Во сколько это обойдется?”");

let expenses2 = prompt("“Введите обязательную статью расходов?”");
let amount2 = +prompt("“Во сколько это обойдется?”");

let mission = 1000000;
let period = 12;

let budgetDay = money / 30;
let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);

// console.log(typeof money, typeof income, typeof deposit);
// console.log(addExpenses.length);
// console.log("Период равен " + period + " месяцев");
// console.log("Цель заработать " + mission + " рублей/долларов/гривен/юани");
// console.log(addExpenses.toLowerCase().split(", "));
// console.log(budgetDay);
