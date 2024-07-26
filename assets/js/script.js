


// generateComputerchoice() {

// }


/**Add event listeners to buttons */
let choiceButtons = document.getElementsByClassName("choiceButton");

for (let i=0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener('click', getPlayerChoice);
}

function getPlayerChoice() {
    console.log("You clicked the button!");
}

function genComputerChoice() {
    let numComp = Math.floor(Math.random() * 5) +1;
    console.log(numComp);
    if numComp = 1 {
        document.getElementById(computerChoice).innerHTML = "rock"
    } else if numComp = 2 {
        document.getElementById(computerChoice).innerHTML = "paper"
    } else if numComp = 3 {
        document.getElementById(computerChoice).innerHTML = "scissors"
    } else if numnumComp = 4 {
        document.getElementById(computerChoice).innerHTML = "lizard"
    } else if numComp = 5 {
        document.getElementById(computerChoice).innerHTML = "spock"
    }
}
