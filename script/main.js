"use strict";

let money = +prompt("Ваш месячный доход?");
// let income = "freelance";
// let addExpenses = prompt(
//   "“Перечислите возможные расходы за рассчитываемый период через запятую”");
// let deposit = confirm("“Есть ли у вас депозит в банке?”");

// let expenses1 = prompt("“Введите обязательную статью расходов?”");
let amount1 = +prompt("“Во сколько это обойдется?”");

// let expenses2 = prompt("“Введите обязательную статью расходов?”");
let amount2 = +prompt("“Во сколько это обойдется?”");

let budgetMonth = money - (amount1 + amount2);
console.log("Бюджет на месяц:" + budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);
console.log("Бюджет на день:" + budgetDay);

let mission = 1000;
let period = Math.ceil(mission / budgetMonth);
console.log("Цель будет достигнута через " + period + " месяцев");

// console.log(typeof money, typeof income, typeof deposit);
// console.log(addExpenses.length);
// console.log("Период равен " + period + " месяцев");
// console.log("Цель заработать " + mission + " рублей/долларов/гривен/юани");
// console.log(addExpenses.toLowerCase().split(", "));
// console.log(budgetDay);

if (budgetDay >= 1200) {
  console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log("У вас средний  уровень дохода");
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log("К сожалению у вас уровень дохода ниже среднего");
} else {
  console.log("“Что то пошло не так”");
}

let lang = "ru";

let engDays = "monday, tuesday, wednesday, fourthday, friday, saturday, sunday";

let rusDays =
  "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье";

switch (lang) {
  case "en":
    console.log(engDays);
    break;
  case "ru":
    console.log(rusDays);
    break;
}
let namePerson = "Артем";
