//* Wait for document to load before all else */

//* Toggle dark-mode */

// function toggleDark() {
//     let toggleDButton = document.getElementById("toggleDark");
//     toggleDButton.addEventListener('click', darkMode);
// }

// function darkMode(event) {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }


//**Get playername and display it */
const nameForm = document.getElementById("form");
nameForm.addEventListener('submit', displayPlayerName);
// generateComputerChoice();

function displayPlayerName(event) {
    event.preventDefault();
    let playersName = form.elements["playerName"].value;
    let greetingSpan = document.getElementById("greetNewPlayer");
    greetingSpan.innerHTML = `Greetings ${playersName}! 
    Click an icon to make your choice. The computer chooses simultaneously.`;
    generateComputerChoice();
}


/**Add event listeners to choice buttons */
let choiceButtons = document.getElementsByClassName("choiceButton");

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', getPlayerChoice);
}

//*Display player choice in results section*/
function getPlayerChoice() {
    document.getElementById("playerChoice").innerHTML = `${this.id}`;
    displayComputerChoice();
    generateComputerChoice();

}

/** Generate computer choice */
function generateComputerChoice() {
    let compNumber = Math.floor(Math.random() * 5) + 1;
    document.getElementById("compNumber").innerHTML = compNumber;
}

/**Display computer choice in results section */
function displayComputerChoice() {
    let hiddenNumber = document.getElementById("compNumber").innerHTML;
    if (hiddenNumber === "1") {
        document.getElementById("computerChoice").innerHTML = "rock";
    } else if (hiddenNumber === "2") {
        document.getElementById("computerChoice").innerHTML = "paper";
    } else if (hiddenNumber === "3") {
        document.getElementById("computerChoice").innerHTML = "scissors";
    } else if (hiddenNumber === "4") {
        document.getElementById("computerChoice").innerHTML = "lizard";
    } else if (hiddenNumber === "5") {
        document.getElementById("computerChoice").innerHTML = "Spock";
    }
}
/**Event listener to call compare function */
document.getElementById("getWinner").addEventListener('click', compareChoices);

/** Compare player and computer choices to announce win loss or tie
 * and the relevant rule in play
 */
function compareChoices() {
    let playerChoice = document.getElementById("playerChoice").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;
    if (playerChoice = computerChoice) {
throw("BIG ERROR");
        // document.getElementById("winnerAnnounced").innerHTML = "Tie Game";
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Paper covers rock";
        } else if (computerChoice === "scissors") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Rock smashes scissors";
        } else if (computerChoice === "lizard") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Rock smashes lizard";
        } else if (computerChoice === "Spock") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Spock vaporizes rock";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Paper covers rock";
        } else if (computerChoice === "scissors") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Scissors cuts paper";
        } else if (computerChoice === "lizard") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Lizard eats paper";
        } else if (computerChoice === "Spock") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Paper disproves Spock";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins!";
            document.getElementById("reason").innerHTML = "Rock smashes scissors";
        } else if (computerChoice === "paper") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Scissors cuts paper";
        } else if (computerChoice === "lizard") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Scissors decapitates lizard";
        } else if (computerChoice === "Spock") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Spock smashes scissors";
        }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Rock smashes lizard";
        } else if (computerChoice === "paper") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Lizard eats paper";
        } else if (computerChoice === "scissors") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Scissors decapitates lizard";
        } else if (computerChoice === "Spock") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Lizard poisons Spock";
        }
    } else if (playerChoice === "Spock") {
        if (computerChoice === "rock") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Spock vaporizes rock";
        } else if (computerChoice === "paper") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Paper disproves Spock";
        } else if (computerChoice === "scissors") {
            document.getElementById("winnerAnnounced").innerHTML = "You win!";
            document.getElementById("reason").innerHTML = "Spock smashes scissors";
        } else if (computerChoice === "lizard") {
            document.getElementById("winnerAnnounced").innerHTML = "Computer wins";
            document.getElementById("reason").innerHTML = "Lizard poisons Spock";
        }
    } else {
        throw("There is an error somewhere. This is illogical.");}
}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function incrementTieScore() {

}

function displayRule() {

}