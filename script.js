'use strict';
// intro to DOM video 72

/*console.log(document.querySelector(`.message`).textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector(`.message`).textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log( document.querySelector('.guess').value);
*/
//=========================================





//".btn again"
// events video 73, game logic video74, video 75 manipulation of CSS, coding challenge 1, 
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

//coding challenge1
document.querySelector('.check').addEventListener(`click`, function () {
    const guess = Number(document.querySelector('.guess').value);
console.log(secretNumber)
 document.querySelector('.again').addEventListener('click', function(){
    score =20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = "#222";
     secretNumber = Math.trunc(Math.random()*20)+1;
     Number(document.querySelector('.guess').value=" ");
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('.number').textContent = "?";


    
 });
    //code along * a lot I paused the video and did myself*
    console.log(guess, typeof guess);


    //when no number is entered
    if(!guess){

        document.querySelector(`.message`).textContent = 'No guess!';}
        // when player guess's the number
        else if (guess === secretNumber){
            document.querySelector('.message').textContent = 'Correct Number';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            
        }



        //when player's guess is higher than secretNumber
        else if(guess > secretNumber){
            if (score>1){
            document.querySelector('.message').textContent = 'You guessed too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';
            }
        }
        //when player's guess is too low
        else if(guess < secretNumber){
            if (score>1){
                document.querySelector('.message').textContent = 'You guessed too low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = 'red';

            }
        }
    
});
//===================================











































