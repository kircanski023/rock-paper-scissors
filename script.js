//Write a function that returns a random string of "Rock" "Paper" or "Scissors"
function getComputerChoice(){
    let result;
    switch(Math.floor((Math.random() * 3) + 1 )) {
        case 1:
          result = "Rock";
          break;
        case 2:
          result = "Paper";
          break;
        case 3:
          result = "Scissors";
      }
    return result;
}

//Write a function that gets the user random string of "Rock" "Paper" or "Scissors"
//Define variables for human and computer score and set them to 0 and
let humanScore = 0;
let computerScore = 0;

const resultContainer = document.querySelector("#result")
const resultPara = document.createElement("p");
const displayChoice = document.createElement("p");
const displayWinner = document.createElement("p");

function displayResult(){
    resultPara.textContent = `You : ${humanScore} ---- Coumputer : ${computerScore}`
    resultContainer.appendChild(resultPara);
    resultContainer.appendChild(displayChoice);
}

function playRound(){
        if(resultContainer.contains(displayWinner)){
            resultContainer.removeChild(displayWinner);
        }
        let computerChoice = getComputerChoice();
        if(humanChoice === "Rock" && computerChoice === "Paper"){
         computerScore++ ;
         displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
         displayResult();
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++ ;
            displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
            displayResult();
        }
        else if(humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++ ;
            displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
            displayResult();
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            humanScore++ ;
            displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
            displayResult();
        }
        else if(humanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++ ;
            displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
            displayResult();
        }
        else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++ ;
            displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
            displayResult();
        }
        else if(humanChoice === computerChoice) {
            displayChoice.textContent = `${humanChoice} ---- ${computerChoice}`
            displayResult();
        }
    }

    function stopGame(){
        resultContainer.removeChild(displayChoice);
        if(humanScore == 5){
            displayWinner.textContent = "You Win!"
            resultContainer.appendChild(displayWinner);
        }
        else if(computerScore == 5){
            displayWinner.textContent = "Computer Wins!"
            resultContainer.appendChild(displayWinner);
        }
        humanScore = 0;
        computerScore = 0;
    }

    function playGame(){
        const button = document.querySelectorAll("button");
        let playerSelection;
        button.forEach(function(btn){
        btn.addEventListener("click", function(){    
                playerSelection = btn.textContent.at(0).toUpperCase() + btn.textContent.slice(1).toLowerCase();
                humanChoice = playerSelection;
                playRound();
                if(humanScore == 5 || computerScore == 5){
                    stopGame();
                  }
            })
        });
    }
playGame()

