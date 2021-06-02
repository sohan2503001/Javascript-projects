'use strict';
const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = 'No number';
        } else if (guess === secretnumber) {
            document.querySelector('.message').textContent = 'correct number';
        } else if (guess > secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too high';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost a game'
                document.querySelector('.score').textContent = 0;
            }

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
