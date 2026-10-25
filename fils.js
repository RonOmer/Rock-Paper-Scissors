const choices = ["rock", "paper", "scissors"];


function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "draw";
    }

    if (playerSelection === "Game cancelled"){
        return "Game cancelled";
    }

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function userSelection(){
    while(true){
        const input = prompt("Choose Rock,Paper or Scissors");
        
        if (input === null)
            return "Game cancelled";

        const playerSelection = input.trim().toLowerCase();

        if(!choices.includes(playerSelection)) 
            alert("Invalid choice! Please choose Rock, Paper or Scissors.");
        else{
            return playerSelection
        }
    }
}

function game(){
    let computerCounter = 0;
    let playerCounter = 0;

    alert(`Welcome to Rock, Paper, Scissors!

    Choose Rock, Paper, or Scissors in each round.
    The first player to win 3 rounds wins the game!

    Press Cancel anytime to quit.`);

    while(true){
        while (computerCounter < 3 && playerCounter < 3){
            const computerSelection = computerPlay();
            const playerSelection = userSelection();
            const result = playRound(playerSelection,computerSelection);

            if(result === "Game cancelled"){
                return "You cancelled the game";
            }
            else if(result === "lose"){
                computerCounter++;
            }
            else if (result === "win"){
                playerCounter++;
            }
            alert(`You chose: ${playerSelection}
            Computer chose: ${computerSelection}
            Result: ${result}

            Score: You ${playerCounter} - Computer ${computerCounter}`);
        } 
        const Score = (playerCounter === 3 ? "You win" : "You lose");
        alert(Score);
        if(confirm("do you wanna play again?")){
            computerCounter = 0;
            playerCounter = 0;
        }
        else{
            return "GoodBye! :)";
        }
        
    }
}

alert(game());