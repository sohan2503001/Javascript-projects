'use strict';
const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //input is empty
        if (!guess) {
            document.querySelector('.message').textContent = 'No number';

            //guess is correct
        } else if (guess === secretnumber) {
            document.querySelector('.message').textContent = 'correct number';
            document.querySelector('.number').textContent = secretnumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            //guess is too high
        } else if (guess > secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too high';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost a game'
                document.querySelector('.score').textContent = 0;
            }

            //guess is too low
        } else if (guess < secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too low';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost a game'
                document.querySelector('.score').textContent = 0;
            }
        }
    }
)
