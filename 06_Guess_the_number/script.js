let randomNumber = parseInt(Math.random()*100+1)

const submit= document.querySelector('#subt')
const inputValue= document.querySelector("#guessField")
const guesslot= document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess =1
let playgame =true

if(playgame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess= parseInt(inputValue.value)
        console.log(guess)
        valideguess(guess)
        
    })
}
function valideguess(guess){
    if(isNaN(guess)){
        alert('Please Enter Valid Number')
    }
    else if(guess>100){
        alert('Enter Number less than 100')
    }
    else if(guess<1){
        alert('Enter Number more than 1')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game over. Random Number ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess){
    if(guess=== randomNumber){
        displayMessage(`You guessed Right. Random number is : ${randomNumber}`)
        endGame();
    }
    else if(guess < randomNumber){ 
        displayMessage(`You guess is too Low. `)
    }
    else if(guess > randomNumber){ 
        displayMessage(`You guess is too High. `)
    }
}
function displayGuess(guess){
    inputValue.value = '';
    guesslot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = ` ${11-numGuess}`;
}
function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`
}
function endGame(){
    inputValue.value= ''
    inputValue.setAttribute('disabled', ''); // Fix here
    p.classList.add('button')
    p.innerHTML = `<h2 id='newgame' style="
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;
    "> Start new Game </h2>`;
    startover.appendChild(p)
    playgame=false
    newGame();

}
function newGame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',(e)=>{
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess= 1
        guesslot.innerHTML= ''
        remaining.innerHTML = ` ${11-numGuess}`;
        inputValue.removeAttribute('disabled')
        startover.removeChild(p)
        displayMessage("NewGame")
        playgame=true
    })
}


