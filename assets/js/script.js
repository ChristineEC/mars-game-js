//* Wait for document to load before all else */

document.body.onload = console.log("The document has loaded");
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    //Toggle button listener
    document.getElementById("game-wrapper").addEventListener('click', toggleDark);
    
    //Event listener for player name input
    const nameForm = document.getElementById("form");
    nameForm.addEventListener('submit', displayPlayerName);

    //Event listeners for choice buttons
    let choiceButtons = document.getElementsByClassName("choiceBtn");
    for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', getPlayerChoice);
    console.log("buttons working");
    };

    //Event listener for score reset button
    let resetScore = document.getElementById("resetScore");
    resetScore.addEventListener("click", resetScore);
    
    //Event listener to call compare function
    document.getElementById("getWinner").addEventListener('click', compareChoices);

    generateComputerChoice();

});

// Toggle between light and dark mode function
    function toggleDark(event) {
    console.log("button works");
    let toggleArea = document.getElementById("game-wrapper");
    // toggleArea.style["background-color"] = "#ffffff" ? toggleArea.style["background-color"] = "rgb(2, 60, 2)" : toggleArea["background-color"] = "#ffffff";
    // toggleArea.style["color"] = "rgb(2, 60, 2)" ?  toggleArea.style["color"] = "#ffffff" : toggleArea["color"] = "rgb(2, 60, 2)";
    (toggleArea.style["background-color"] = "rgb(2, 60, 2)") ? (toggleArea["background-color"] = "#ffffff") : (toggleArea.style["background-color"] = "rgb(2, 60, 2)");
    (toggleArea.style["color"] = "#ffffff") ? (toggleArea["color"] = "rgb(2, 60, 2)") : (toggleArea.style["color"] = "#ffffff");
    // toggleArea.style["background-color"] = "#ffffff" ? toggleArea.style["background-color"] = "rgb(2, 60, 2)" : toggleArea["background-color"] = "#ffffff";
    // toggleArea.style["color"] = "rgb(2, 60, 2)" ?  toggleArea.style["color"] = "#ffffff" : toggleArea["color"] = "rgb(2, 60, 2)";
    };


// Display player name in greeting
function displayPlayerName(event) {
    event.preventDefault();
    let playersName = form.elements["playerName"].value;
    let greetingSpan = document.getElementById("greetNewPlayer");
    greetingSpan.innerHTML = `Greetings ${playersName}!`;
    let makeYourChoice = document.getElementById("makeYourChoice");
    makeYourChoice.innerHTML = "Click on an icon below to make your choice"
}

//*Display player choice in results section*/
function getPlayerChoice() {
    document.getElementById("playerChoice").innerHTML = `${this.id}`;
    displayComputerChoice();
    generateComputerChoice();
}

// Generate random number for Computer Choice
function generateComputerChoice() {
    let compNumber = Math.floor(Math.random() * 5) + 1;
    document.getElementById("compNumber").innerHTML = compNumber;
}

/**Translate random number to computer choice 
 * and display in results section */
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



/** Compare player and computer choices to announce win loss or tie
 * and the relevant rule in play
 */
function compareChoices() {
    let playerChoice = document.getElementById("playerChoice").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;
    // console.log(document.getElementById("playerChoice").innerHTML);
    // console.log(playerChoice);
    // console.log(document.getElementById("computerChoice").innerHTML);
    // console.log(computerChoice);
    if (playerChoice === computerChoice) {
        document.getElementById("winnerAnnounced").innerHTML = "Tie Game";
        document.getElementById("reason").innerHTML = "";
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
    } 
}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function incrementTieScore() {

}

function resetScore (event) {
    document.getElementById("playerScore").innerHTML = "0";
    document.getElementById("computerScore").innerHTML = "0";
    console.log("reset function called");
}

// need to fix game loop