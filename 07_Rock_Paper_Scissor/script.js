const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

const results = document.querySelector('#result')
const score = document.querySelector('#score')

const audio = new Audio('audio.mp3'); 
let wins=0;
let lose=0;
let ties=0;

rock.addEventListener('click',
    ()=> {
        audio.currentTime=2;
        audio.play();
        playWithload('rock')
        console.log('UserChoice: rock')
        
    }
)

paper.addEventListener('click',
    ()=> { 
        audio.currentTime=2;
        audio.play();
        playWithload('paper') 
        console.log('UserChoice: paper')
   
     }
)

scissor.addEventListener('click',
    ()=> {
        audio.currentTime=2;
        audio.play();
        playWithload('scissors')
        console.log('UserChoice: scissor')
        
    }
)

function playWithload(userchoice){

    results.innerHTML = ' '
    const load= ['Rock.. 🪨 ', 'Paper.. 📃' , 'Scissors.. ✂️ ']
    let index=0;

    const loadingInterval = setInterval(() => {
        document.getElementById('load').innerHTML += load[index];
        index=(index+1)%load.length;
    }, 450);

    setTimeout(() => {
        clearInterval(loadingInterval);
        audio.pause();
        play(userchoice);
    },  1500 );
}
function play(userchoice){
    const computerChoice= getcomputerChoice();
    console.log("computer choice: ",computerChoice);
    const result = compare(userchoice,computerChoice);
    console.log("result : use: ",result);

    if(result === 'win'){
            wins++;
            results.innerHTML = ` You Win! 🎊 <br>
                                 Your chose ${userchoice} <br>
                                 Computer chose ${computerChoice}.`;
    }
    else if(result === 'lose'){
            lose++;
            results.innerHTML = `You lose! 🥺<br>
                                 Your chose ${userchoice} <br>
                                 Computer chose ${computerChoice}.`;
    }
    else{
        ties++
        results.innerHTML = `You Ties 😁 !<br>
                                 Your chose ${userchoice} <br>
                                 Computer chose ${computerChoice}.`;
    }
    updateScore();
}

function getcomputerChoice(){
        const arry=['rock', 'paper', 'scissors']
        const index= Math.floor(Math.random()*arry.length)
        return arry[index]
}

function compare(userchoice,computerChoice){

    if(userchoice === computerChoice){
        return 'tie';
    }
    else if( 
            (userchoice === 'rock' && computerChoice === 'scissors') 
        ||  (userchoice === 'paper' && computerChoice === 'rock')
        ||  (userchoice === 'scissors' && computerChoice === 'paper')
    )
    return 'win'
    
    else{
        return 'lose'
    }
}

function updateScore(){
    document.getElementById('wins').innerHTML=wins
    document.getElementById('lose').innerHTML=lose
    document.getElementById('ties').innerHTML=ties
    document.getElementById('load').innerHTML= ' '
}


