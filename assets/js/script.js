


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
