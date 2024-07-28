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
    console.log(compNumber);
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

/** Compare player and computer choices to announce win loss or tie
 * and the relevant rule in play
 */

function compareChoices() {
    let playerChoice = document.getElementById("playerChoice").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;
    console.log(playerChoice);   // These are working
    console.log(computerChoice);
    if (playerChoice === computerChoice) {
        document.getElementById("winnerAnnounced").innerHTML = "Tie Game";}
        else {console.log("error here");}
    // } else if (playerChoice === "rock") && ((computerChoice === "lizard") || ("computerChoice === "scissors"))) 
    //     {document.getElementById("winnerAnnounced").innerHTML = `${playerName} wins! Rock smashes both lizard and scissors.`;
    //     }
    // else if ((playerChoice === "rock") && ((computerChoice === "paper") || (computerChoice === "Spock"))) 
    // {document.getElementById("winnerAnnounced").innerHTML = "The computer wins. The two things that can beat rock are paper and Spock. Paper covers rock and Spock vaporizes rock.";
    //         } else {
    //                 console.log("Player did not choose 'rock'");
    //             }
    }

    compareChoices();
            // else if ((playerChoice = "paper") && ())
            //     }

            function incrementPlayerScore() {

            }

            function incrementComputerScore() {

            }

            function incrementTieScore() {

            }

            function displayRule() {

            }