const choices = ["rock", "paper", "scissors"];


function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "draw";
    }

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function game(){
    let computerCounter = 0;
    let playerCounter = 0;

    alert(`Welcome to Rock, Paper, Scissors!

    Choose Rock, Paper, or Scissors in each round.
    The first player to win 3 rounds wins the game!

    Press Cancel anytime to quit.`);

    while (computerCounter < 3 && playerCounter < 3){
        const input = prompt("Choose Rock,Paper or Scissors");
        
        if (input === null)
            return "Game cancelled";

        const playerSelection = input.trim().toLowerCase();

        if (!choices.includes(playerSelection)) {
            alert("Invalid choice! Please choose Rock, Paper or Scissors.");
            continue;
        }

        const computerSelection = computerPlay();

        const result = playRound(playerSelection,computerSelection);

        if (result === "win"){
            playerCounter++;
        }
        else if(result === "lose"){
            computerCounter++;
        }
        alert(`You chose: ${playerSelection}
        Computer chose: ${computerSelection}
        Result: ${result}

        Score: You ${playerCounter} - Computer ${computerCounter}`);
            } 

    return playerCounter === 3 ? "You win" : "You lose";
}

alert(game());