let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum)

const submit = document.querySelector(".btn");
const userInput = document.querySelector('.input');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p');


let prevGuues = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    // It's the no is validate or no.
    if(isNaN(guess)){
        alert('Please enter a valid no')
    }else if(guess < 1){
        alert('Please enter a no more than 1')
    }else if(guess > 100){
        alert('Please enter a no less than 100')
    }else{
        prevGuues.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${randomNum}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

function checkGuess(guess){
    // It's check the validate is corrected or not or low or high.
    if(guess === randomNum){
        displayMessage(`Congratulations!!! You Guessed it right.`);
        endGame();
    }else if (guess < randomNum){
        displayMessage(`Number is too low.`);
    }else if (guess > randomNum){
        displayMessage(`Number is too high.`)
    }
}

function displayGuess(guess){
    // It's cleant the value, it's updated the guess.
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    // It's display the message.
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(event){
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuues = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
