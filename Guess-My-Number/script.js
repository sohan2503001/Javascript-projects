'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


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

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            //guess is too incorrect
        } else if (guess !== secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretnumber ? 'Too high' : 'Too low';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost a game'
                document.querySelector('.score').textContent = 0;
            }
        }
    },


    // } else if (guess > secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost a game'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //guess is too low
    // } else if (guess < secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost a game'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    //     }
    // )

    document.querySelector('.again').addEventListener(
        'click', function () {
            //CSS
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';

            //JS
            secretnumber = Math.trunc(Math.random() * 20) + 1;
            document.querySelector('.score').textContent = 20;
            document.querySelector('.number').textContent = '?';
            document.querySelector('.message').textContent = 'Start guessing...';
            document.querySelector('.guess').value = '';
        }))