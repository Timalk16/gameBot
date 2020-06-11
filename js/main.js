'use strict';

// являются ли введенные данные числом или нет
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };





let newGame = function() {
    let enteredNumber = Math.floor(Math.random() * 100);
    console.log(enteredNumber);
    let getNumber = function() {
        let wantPlay = function(play) { 
            if (play) {
                getNumber();
            } else {
                alert('Спасибо, что поиграли со мной');
            }
        };
        let desire,
         userNumber = prompt('Угадай число от 1 до 100');
        

        if (userNumber === null) {
            alert('Может, в другой раз');
        }
        else if (!isNumber(userNumber) || (parseFloat(userNumber) > 100)){
            desire = confirm('Введи число от 0 до 100!');
            wantPlay(desire);
        }
         else if (userNumber == enteredNumber) {
            alert('Поздравляю, Вы угадали!!!');
        }
        else if (userNumber > enteredNumber) {   
            desire = confirm('Загаданное число меньше');
            wantPlay(desire);
        } 
        else if (userNumber < enteredNumber) {
            desire = confirm('Загаданное число больше');
            wantPlay(desire);
        }
    };
    return getNumber();
};

let game = newGame();
game();