'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function askNumber() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min - 1)) + min;
    }

    let compNumber = getRandomInt(1, 100);
    console.log(compNumber); // читерное число компьютера

    function enterNumber() {

        const userNumber = prompt("Угадай число от 1 до 100"); // число пользователя

        if (!userNumber && userNumber !== '0') {
            return;
        }

            if (isNumber(userNumber)) {
                const number = +userNumber;

                if (number > 100 || number < 1) {
                    alert("Введите число от 1 до 100!");

                } else {

                    if (userNumber < compNumber) {

                        alert('Загаданное число больше');

                    } else if (userNumber > compNumber) {

                        alert('Загаданное число меньше');

                    } else {

                        alert('Ты угадал!!! Поздравляем!!!');
                        return;

                    }

                }

            } else {

                alert('Введи число!');

            }
            enterNumber();
    }
    enterNumber();

}
askNumber();