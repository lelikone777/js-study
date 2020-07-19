'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelector('.income-items');
     

  let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {
     
      if (salaryAmount.value === '') {
        alert('Укажите месячный доход!')
        return;
      }

      appData.budget = +salaryAmount.value;

      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();

      appData.showResult();
    },

    showResult: function() {
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();
    },




    addExpensesBlock: function(){
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
      }
    },

    getExpenses: function() {
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          appData.expenses[itemExpenses] = cashExpenses; 
        }
      });
    },

    getIncome: function() {
      if (confirm('Есть ли у вас дополнительный затаботок?')) {
        let itemIncome = prompt('Какой?', "Халтурю");
        let cashIncome = prompt('Сколько зарабатываешь на этом в месяц?', 10000);
        appData.income[itemIncome] = cashIncome;
      }

        for (let key in appData.income){
          appData.incomeMonth += +appData.income[key];
        }

    },

    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if (item !== '') {
          appData.addExpenses.push(item);
        }
      });
    },

    getAddIncome: function() {
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
          appData.addIncome.push(itemValue);
        }
      })
    },

    getInfoDeposit: function () {
        appData.deposit = confirm('Есть ли депозит в банке?');
        if (appData.deposit) {
          appData.percentDeposit = prompt('Какой годовой процент?', 10);
          appData.moneyDeposit = prompt('Какая сумма заложена', 100000);
        }
      },

    getExpensesMonth: function () {
      for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
      }
    },

    getBudget: function () {
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function () {
      return targetAmount.value / appData.budgetMonth;
    },
  
    getStatusIncome: function () {
      if (appData.budgetDay > 800) {
        return ('У вас высокий уровень дохода');
      } else if (appData.budgetDay > 300) {
        return('У вас средний уровень дохода');
      } else if (appData.budgetDay > 0) {
        return('К сожалению у вас уровень дохода ниже среднего');

      } else {
        return('Что-то пошло не так');
      }
    },

    calcPeriod: function () {
      return appData.budgetMonth * periodSelect.value;
    },
  };

  start.addEventListener('click', appData.start);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
 

  // if (appData.getTargetMonth() > 0) {
  //   console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + ' месяца');
  // } else {
  //   console.log("Цель не будет достигнута");
  // }

