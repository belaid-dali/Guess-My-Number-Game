'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); 
    //When there is no input
    if(!guess){
        console.log(document.querySelector('.message').textContent = '⛔️ Not A Number!');

    //When player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    //When guess is too high
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '⬆️ Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💥 You Lost The Game!';
        }

    //When guess is too low
    }else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '⬇️ Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '💥 You Lost The Game!';
        }
    }
});