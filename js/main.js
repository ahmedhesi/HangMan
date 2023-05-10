/*----- constants -----*/
const WORD_BANK= [
    "METEOR",
    "SHOOTINGSTAR",
    "MILKY WAY",
    "GALAXY",
    "PLUTO",
]

const MAX_WRONG_GUESSES= 6;





/*----- state variables -----*/
	let secretWord;
	let playerWord;
	let wrongGuesses;
    let winner;
	
/*----- cached elements  -----*/
const resultsEL = document.getElementById('game-result');
const emptyWordBank = document.querySelector("div");

/*----- event listeners -----*/
document.getElementById("button").addEventListener("click", handleClick) {

}

/*----- functions -----*/

function initilize() {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)].toUpperCase().split("");
    playerWord = secretWord.map(function (ltr){
       ltr === " " ? " " ; "_"
        }) 
    wrongGuesses = [];
    winner = undefined;
    render()
}

function handleClick (evt) {
    const letter = evt.target.innerContent;
    if (evt.target.tagname !== "BUTTON")  {
       return
    }  if () {
        
    } else if () {
        
    }
    
    render()   
}

function render() {
    renderResults() 


}

function renderResults() {
emptyWordBank.innerContent = playerWord.join(" ")
}

