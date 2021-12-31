let playerScore = 0;
let computerScore = 0;
const container = document.querySelector("#display");
const buttons = document.querySelectorAll("#btn");

function computerPlay() {
    // Chooses a random value for computerPlay.
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]

}

function playRound(playerSelection, computerSelection) {
    // Compares playerSelection and computerSelection
    if (playerSelection === computerSelection) {
        document.getElementById('result').innerText = ("It's a tie! Best of Luck for the next round.")
    }
    else if (playerSelection.length - computerSelection.length === -1 || playerSelection.length - computerSelection.length === 4 || playerSelection.length - computerSelection.length === -3) {
        computerScore++
        document.getElementById('scoreComputer').innerText = (computerScore)
        document.getElementById('result').innerText = (`You lost this round! Computer chose ${computerSelection}.`)
    }
    else {
        playerScore++
        document.getElementById('scorePlayer').innerText = (playerScore)
        document.getElementById('result').innerText = (`You won this round! Computer chose ${computerSelection}.`)
    }
}

function game() {
    buttons.forEach((button1) => {
        button1.addEventListener("click", () => {
            let computerSelection = computerPlay();
            if (button1.id === "btn") {
                playRound(button1.value, computerSelection)
            }
            if (playerScore === 5) {
                document.getElementById('congrats').innerText = `Congrats!!!! You won! Your score ${playerScore} Vs. Computer score ${computerScore}.`
            }
            else if (computerScore === 5) {
                document.getElementById('congrats').innerText = `Sorry you've lost. No worries you can Win. The results is: Your score ${playerScore} Vs. Computer score ${computerScore}.`
            }
            if (playerScore === 5 || computerScore === 5) {
                buttons.forEach((button) => {
                    button.removeAttribute("id")
                })
            }
        })
    })
}
function playAgain() {
    const playAgain = document.querySelector('#playAgain');
    playAgain.addEventListener('click', () => {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("scorePlayer").innerText = playerScore;
        document.getElementById("scoreComputer").innerText = computerScore;
        document.getElementById('result').innerText = "######### Let's Start Again #########"
        document.getElementById("congrats").innerText = ""
        buttons.forEach((button) => {
            button.setAttribute("id", "btn")
        })
    });
}
game()
playAgain()