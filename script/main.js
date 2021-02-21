'use strict';

let money = 50000;
let income = "freelance";
let addExpenses = "Интернет, ТаксИ, КоммуналкА";
let deposit = true;
let mission = 1000000;
let period = 12;
let budgetDay = money / 30;

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей/долларов/гривен/юани");
console.log(addExpenses.toLowerCase().split(", "));
console.log(budgetDay);