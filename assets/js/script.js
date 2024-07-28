//*
 Wait for document to load before all else */

//* Toggle dark-mode */

function toggleDark() {
    let toggleDButton = document.getElementById("toggleDark");
    toggleDButton.addEventListener('click', darkMode);
}

function darkMode(event) {
    let element = document.body;
    element.classList.toggle("dark-mode");
}


//**Get playername and display it */


const nameForm = document.getElementById("form");
nameForm.addEventListener('submit', displayPlayerName);
generateComputerChoice();
 
function displayPlayerName(event) {
    event.preventDefault();
    console.log("testing");
    let playersName = form.elements["playerName"].value;
    let greetingSpan = document.getElementById("greetNewPlayer");
    greetingSpan.innerHTML = `Greetings ${playersName}! 
    Click an icon to make your choice. The computer chooses simultaneously.`;
    // generateComputerChoice();
}


/**Add event listeners to choice buttons */
let choiceButtons = document.getElementsByClassName("choiceButton");

for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', getPlayerChoice);
}

//*Display player and computer choice in results section*/
function getPlayerChoice() {
    document.getElementById("playerChoice").innerHTML = `You chose ${this.id}`;
    displayComputerChoice();
    generateComputerChoice();

}

/** Generate computer choice */
function generateComputerChoice() {
    let compNumber = Math.floor(Math.random() * 5) + 1;
    document.getElementById("compNumber").innerHTML = compNumber;
    console.log(compNumber);
}

function displayComputerChoice() {
    let hiddenNumber = document.getElementById("compNumber").innerHTML;
    if (hiddenNumber === "1") {
        document.getElementById("computerChoice").innerHTML = "The computer chose rock";
    } else if (hiddenNumber === "2") {
        document.getElementById("computerChoice").innerHTML = "The computer chose paper";
    } else if (hiddenNumber === "3") {
        document.getElementById("computerChoice").innerHTML = "The computer chose scissors";
    } else if (hiddenNumber === "4") {
        document.getElementById("computerChoice").innerHTML = "The computer chose lizard";
    } else if (hiddenNumber === "5") {
        document.getElementById("computerChoice").innerHTML = "The computer chose Spock";
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