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

function displayResult(){
    resultPara.textContent = `You : ${humanScore} ---- Coumputer : ${computerScore}`
    resultContainer.appendChild(resultPara);
    resultContainer.appendChild(displayChoice);
}

function playRound(){
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

    function getHumanChoice(){
        const button = document.querySelectorAll("button");
        let playerSelection;
        button.forEach(function(btn){
        btn.addEventListener("click", function(){    
        playerSelection = btn.textContent.at(0).toUpperCase() + btn.textContent.slice(1).toLowerCase();
        humanChoice = playerSelection;
        playRound();
        })
    });
    }
    function playGame(){
    while(humanScore < 5 && computerScore < 5){
        console.log(playRound(getComputerChoice()));
    }
}
getHumanChoice();