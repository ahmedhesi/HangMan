/*----- constants -----*/
const WORD_BANK= [
    "METEOR",
    "SHOOTING STAR",
    "MILKY WAY",
    "GALAXY",
    "PLUTO",
]

const MAX_WRONG_GUESSES= 6;





/*----- state variables -----*/
	let secretWord;
	let playerWord;
	let guesses;
    let winner;
    let guessNum;
	
/*----- cached elements  -----*/
const imgEL = document.getElementById('game-result');
const emptyWordBank = document.querySelector("div");
const guessWordEl = document.getElementById('guess-word');

/*----- event listeners -----*/
document.getElementById("letters").addEventListener("click", handleClick)

/*----- functions -----*/
initilize()
function initilize() {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)].toUpperCase().split("");
    guesses = [];
    guessNum = 0 
    winner = undefined;
    render()
}

function handleClick (evt) { 
    const letter = evt.target.innerHTML; 
    if (guesses.includes(letter) || evt.target.tagName !== "BUTTON") return 
    guesses.push(letter)
    if(!secretWord.includes(letter)) guessNum += 1
    winner = checkWinner();
    console.log(winner)
    render() 
}

function render() {
    if (guessWordEl.children.length === 0) {
        secretWord.forEach(letter => {
          const newDiv = document.createElement("div")
          if (letter !== " ")  newDiv.classList.add("letter") 
          guessWordEl.append(newDiv)
        });
    }
    secretWord.forEach((letter, idx) => { 
        if (guesses.includes(letter)) guessWordEl.children[idx].innerHTML = letter;

    });
    imgEL.src = `spaceman-images/spaceman-${guessNum}.jpg`
    // const imgPath = imgs/spaceman-0${wrongGuesses.length};
}

function checkWinner(){
    if (guessNum === 6) return "L"
    if (secretWord.every(letter => guesses.includes(letter))) return "W"; 
    return null;
}


