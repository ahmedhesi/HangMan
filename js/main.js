/*----- constants -----*/
const WORD_BANK = [
    "METEOR",
    "STAR",
    "MILKYWAY",
    "GALAXY",
    "PLUTO",
]

const MAX_WRONG_GUESSES = 6;

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
const playAgainBtn = document.getElementById('play');
const guessesRemainingEl = document.getElementById('guess-count');
const winLoseEl = document.getElementById('win-lose')

/*----- event listeners -----*/
document.getElementById("letters").addEventListener("click", handleClick);
playAgainBtn.addEventListener("click", function () {
    guessWordEl.innerHTML = " "
    initialize()
});

/*----- functions -----*/
initialize()
function initialize() {
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)].toUpperCase().split("");
    console.log(secretWord)
    guesses = [];
    guessNum = 0
    winner = undefined;
    render();
}

function handleClick(evt) {
    const letter = evt.target.innerHTML;
    if (guesses.includes(letter) || evt.target.tagName !== "BUTTON") return
    guesses.push(letter)
    if (!secretWord.includes(letter)) guessNum += 1
    winner = checkWinner();
    render();
}

function render() {
    if (guessWordEl.children.length === 0) {
        secretWord.forEach(letter => {
            const newDiv = document.createElement("div")
            if (letter !== " ") newDiv.classList.add("letter")
            guessWordEl.append(newDiv)
        });
    }
    secretWord.forEach((letter, idx) => {
        if (guesses.includes(letter)) guessWordEl.children[idx].innerHTML = letter;
    });
    imgEL.src = `spaceman-images/spaceman-${guessNum}.jpg`
    guessesRemainingEl.innerText = `${guessNum}`
    if (winner === "W") {
        winLoseEl.innerText = "You Win!";
    } else if (winner === "L") {
        winLoseEl.innerText = "You Lose!";
    } else {
        winLoseEl.innerText = ""
    }

}

function checkWinner() {
    if (guessNum === 6) return "L"
    if (secretWord.every(letter => guesses.includes(letter))) return "W";
    return null;
}


