/** Toggle between light and dark mode function */
function toggleDark(event) {
    let toggleArea = document.getElementById("game-wrapper");

    if (toggleArea.style.backgroundColor === "rgb(2, 60, 2)") {
        toggleArea.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        toggleArea.style.backgroundColor = "rgb(2, 60, 2)";
    }

    if (toggleArea.style.color === "rgb(255, 255, 255)") {
        toggleArea.style.color = "rgb(2, 60, 2)";
    } else {
        toggleArea.style.color = "rgb(255, 255, 255)";
    }
}
/** Add event listeners for the buttons
 * and player name input */
window.addEventListener("DOMContentLoaded", function () {

//Toggle button listeners
let toggDark = document.getElementById("toggleDark");
toggDark.addEventListener('click', toggleDark);

let toggAbout = document.getElementById("aboutGame");
toggAbout.addEventListener('click', showAbout);

let toggHide = document.getElementById("hideAbout");
toggHide.addEventListener('click', hideAboutText);


//Event listener for player name input
const nameForm = document.getElementById("form");
nameForm.addEventListener('submit', displayPlayerName);

//Event listeners for choice buttons
let choiceButtons = document.getElementsByClassName("choiceBtn");
for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', getPlayerChoice);
}
    
//Event listener for score reset button
let reset = document.getElementById("resetScore");
reset.addEventListener("click", resetScore);
});

//Toggle extra info about game
function showAbout(event) {
    let moreInfo = document.getElementById("toggle-text");
    moreInfo.style.display = "block";
}

function hideAboutText(event) {
    let hide = document.getElementById('toggle-text');
    hide.style.display="none";
}

// Display player name in greeting
function displayPlayerName(event) {
    event.preventDefault();
    let playersName = document.getElementById("playerName").value;
    let greetingSpan = document.getElementById("greetNewPlayer");
    greetingSpan.innerHTML = `Greetings ${playersName}!`;
}

/**Translate random number to computer choice
 * and display in results section */
function displayComputerChoice() {
    let compNumber = Math.floor(Math.random() * 5) + 1;
    if (compNumber === 1) {
        document.getElementById("computerChoice").innerHTML = "rock";
    } else if (compNumber === 2) {
        document.getElementById("computerChoice").innerHTML = "paper";
    } else if (compNumber === 3) {
        document.getElementById("computerChoice").innerHTML = "scissors";
    } else if (compNumber === 4) {
        document.getElementById("computerChoice").innerHTML = "lizard";
    } else if (compNumber === 5) {
        document.getElementById("computerChoice").innerHTML = "Spock";
    }
}

/**Get player choice from button and
 * display it onscreen in results section.
 * Call the funtions to display computer choice, compare
 * choices and increment scores */
function getPlayerChoice() {
    document.getElementById("playerChoice").innerHTML = `${this.id}`;
    displayComputerChoice();
    compareChoices();
    keepScore();
}

/** Compare player and computer choices to announce win loss or tie
 * and the relevant rule in play */
function compareChoices() {
    let playerChoice = document.getElementById("playerChoice").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;
    if (playerChoice === computerChoice) {
        document.getElementById("displayWinner").innerHTML = "Tie Game";
        document.getElementById("reason").innerHTML = "";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Paper covers rock";
        } else if (computerChoice === "scissors") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Rock smashes scissors";
        } else if (computerChoice === "lizard") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Rock smashes lizard";
        } else if (computerChoice === "Spock") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Spock vaporizes rock";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Paper covers rock";
        } else if (computerChoice === "scissors") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Scissors cuts paper";
        } else if (computerChoice === "lizard") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Lizard eats paper";
        } else if (computerChoice === "Spock") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Paper disproves Spock";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Rock smashes scissors";
        } else if (computerChoice === "paper") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Scissors cuts paper";
        } else if (computerChoice === "lizard") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Scissors decapitates lizard";
        } else if (computerChoice === "Spock") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Spock smashes scissors";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Rock smashes lizard";
        } else if (computerChoice === "paper") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Lizard eats paper";
        } else if (computerChoice === "scissors") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Scissors decapitates lizard";
        } else if (computerChoice === "Spock") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Lizard poisons Spock";
        }
    } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Spock vaporizes rock";
        } else if (computerChoice === "paper") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Paper disproves Spock";
        } else if (computerChoice === "scissors") {
            document.getElementById("displayWinner").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Spock smashes scissors";
        } else if (computerChoice === "lizard") {
            document.getElementById("displayWinner").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Lizard poisons Spock";
        }
    }
}

function keepScore() {
    let playerScore = parseInt(document.getElementById("playerScore").innerHTML);
    let computerScore = parseInt(document.getElementById("computerScore").innerHTML);
    let tieScore = parseInt(document.getElementById("tieScore").innerHTML);
    let pointTaker = document.getElementById("displayWinner").innerHTML;
    if (pointTaker === "You win!") {
        playerScore = ++playerScore;
        document.getElementById("playerScore").innerHTML = playerScore;
    } else if (pointTaker === "Computer wins!") {
        computerScore = ++computerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    } else if (pointTaker === "Tie Game") {
        tieScore = ++tieScore;
        document.getElementById("tieScore").innerHTML = tieScore;
    }
}

function resetScore() {
    document.getElementById("playerScore").innerHTML = "0";
    document.getElementById("computerScore").innerHTML = "0";
    document.getElementById("tieScore").innerHTML = "0";
    document.getElementById("displayWinner").innerHTML = "";
    document.getElementById("reason").innerHTML = "";
    console.log("reset function called");
}