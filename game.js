const resetBtn = document.createElement("button");
resetBtn.textContent = "▶️ Reset Game";
resetBtn.style.cssText = `
    display:block; width:200px;
    margin: 20px auto;
    padding: 10px 20px; 
    background-color:black;
    color:aqua;
    border:none; border-radius:5px;
    cursor:pointer;
    box-shadow:0 0 5px aqua;
`;
document.querySelector(".game-container").appendChild(resetBtn);
resetBtn.addEventListener("click", () => {
    player.textContent = "YOU:";
    computer.textContent = "ME:";
    result.textContent = "";
});

const choices = ["rock","paper","scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

function playGame(playerchoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    
    let outcome = "";
    if(playerchoice === computerChoice){
        outcome = "It's A Tie";
    } else {
        switch(playerchoice){
            case "rock":
                outcome = (computerChoice==="scissors") ? "☑️YOU WIN" : "❌YOU LOSE";
                break;
            case "paper":
                outcome = (computerChoice==="rock") ? "☑️YOU WIN" : "❌YOU LOSE";
                break;
            case "scissors":
                outcome = (computerChoice==="paper") ? "☑️YOU WIN" : "❌YOU LOSE";
                break;
        }
    }

    player.textContent = `YOU: ${playerchoice}`;
    computer.textContent = `ME: ${computerChoice}`;
    result.textContent = outcome;
}
