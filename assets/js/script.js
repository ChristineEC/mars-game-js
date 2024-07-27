//**Get playername and display it */

const nameForm = document.getElementById("form");
nameForm.addEventListener('submit', displayPlayerName);

function displayPlayerName(event) {
    event.preventDefault();
    console.log("testing");
    let playersName = form.elements["playerName"].value;
    let greetingSpan = document.getElementById("greetNewPlayer");
    greetingSpan.innerHTML = `Greetings ${playersName}!`;
}









/**Add event listeners to choice buttons */
let choiceButtons = document.getElementsByClassName("choiceButton");

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', getPlayerChoice);
}

//*Display player choice in results section*/
function getPlayerChoice() {
    document.getElementById("playerChoice").innerHTML = this.id;
}


function getComputerChoice() {
    let compNumber = Math.floor(Math.random() * 5) + 1;
    console.log(compNumber);

    if (compNumber = 1) {
        document.getElementById("computerChoice").innerHTML = "rock";
    } else if (compNumber = 2) {
        document.getElementById("computerChoice").innerHTML = "paper";
    } else if (compNumber = 3) {
        document.getElementById("computerChoice").innerHTML = "scissors";
    } else if (compNumber = 4) {
        document.getElementById("computerChoice").innerHTML = "lizard";
    } else if (compNumber = 5) {
        document.getElementById("computerChoice").innerHTML = "spock";
    }
}


function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function incrementTieScore() {

}

function displayRule() {

}