/*----- constants -----*/
const WORD_BANK= [
    "METEOR",
    "SHOOTINGSTAR",
    "MILKYWAY",
    "GALAXY",
    "PLUTO",
]

Const MAX_WRONG_GUESSES= 6;





/*----- state variables -----*/
	let secretWord;
	let playerWord;
	let wrongGuesses;
    let winner;
	
/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function initilize() {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
    playerWord = "_"; 
    wrongGuesses = [];
    winner = undefined;
    render()
}

function render() {
    renderResults() 
    

}

