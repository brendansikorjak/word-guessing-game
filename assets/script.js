//to do

//clicking start should reset the game and timer
//store wins and loses


//word list array
const wordList = ["variable", "javascript", "system", "elements", "array"]
const letters = "abcdefghijklmnopqrstuvwxyz"
var gameWord = "";

const gameDisplay = document.getElementById("game-display");
var winsCount = document.getElementById("wins")
var lossesCount = document.getElementById("losses")
var countdown = document.getElementById("timer-num")
var winLoseMessage = document.getElementById("winLose")

var wins = 0;
var losses = 0;


//store wins and loses and displays it
// showWinsAndLosses();
// function showWinsAndLosses() {
//     localWins = localStorage.getItem("wins");
//     localLosses = localStorage.getItem("losses");
// }
function displayWL() {
    lossesCount.textContent = losses
    winsCount.textContent = wins
}

// button function to start the game
function startGame() {
    // start timer
    timer();
    // choose new word
    randomWord();
    // show new word
    blankWord();
    // clicking start button should reset

    //displays wins and losses
    displayWL();
}

//if else function - win or lose(guessed word, or ran out of time)
function timer() {
    var timeLeft = 31;
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdown.textContent = timeLeft + " seconds remaining"
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            countdown.textContent = ""
            winLoseMessage.textContent = "YOU LOSE! The word was: " + gameWord
            losses++
            lossesCount.textContent = losses
            console.log("losses: " + losses)
        } else if (isChanged.every(Boolean)){
            clearInterval(timeInterval)            
            countdown.textContent = ""
            winLoseMessage.textContent = "YOU WIN!"
            wins++
            console.log("wins: " + wins)
            winsCount.textContent = wins
        }
    }, 1000);
}
//chooses random word from word list
function randomWord() {
    const ran = Math.floor(Math.random() * wordList.length);
    gameWord = wordList[ran];
    console.log(gameWord)
}

//blank word appears
function blankWord() {
    for (var i = 0; i < gameWord.length; i++) {
        var span = document.createElement("span");
        span.textContent = "_ ";
        span.id = `${i}`;
        isChanged.push(false);
        gameDisplay.appendChild(span);
    }
}

var isChanged = []

//correct keydown replaces blank spaces
document.body.addEventListener("keydown", function (event) {
    event.preventDefault();
    const enteredLetter = event.key.toLowerCase();
    console.log(enteredLetter);
    if (letters.includes(enteredLetter)) {
        if (gameWord.includes(enteredLetter)) {
            console.log("is in word")
            for (var i = 0; i < gameWord.length; i++) {
                if (gameWord[i] === enteredLetter) {
                    var spanEl = document.getElementById(`${i}`)
                    spanEl.textContent = gameWord[i];
                    isChanged[i] = true;
                    // isSolved();
                }
            }
        }
    }
});

//displays win message
// function isSolved() {
//     if (isChanged.every(Boolean)) {
//         console.log("you win")
//         // wins++
//         // winLoseMessage.textContent = "YOU WIN!"
//     }
// }

