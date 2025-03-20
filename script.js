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



function playRound(computerChoice){
    
        if(humanChoice === "Rock" && computerChoice === "Paper"){
         computerScore++ ;
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("You lose! Paper beats Rock.");
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++ ;
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("You lose! Scissors beats Paper.");
        }
        else if(humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++ ;
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("You lose! Rock beats Scissors.");
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            humanScore++ ;
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("You win! Rock beats Scissors."); 
        }
        else if(humanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++ ;
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("You win! Paper beats Rock.");
        }
        else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++ ;
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("You win! Scissors beats Paper.");
        }
        else if(humanChoice === computerChoice) {
            console.log(humanChoice, computerChoice);
            console.log(humanScore, computerScore);
            console.log("Draw!");
        }
    }

    function getHumanChoice(){
        const button = document.querySelectorAll("button");
        let playerSelection;
        let computerChoice;
        button.forEach(function(btn){
        btn.addEventListener("click", function(){    
        playerSelection = btn.textContent.at(0).toUpperCase() + btn.textContent.slice(1).toLowerCase();
        computerChoice = getComputerChoice();
        humanChoice = playerSelection;
        playRound(computerChoice);
        })
    });
    }
    function playGame(){
    while(humanScore < 5 && computerScore < 5){
        console.log(playRound(getComputerChoice()));
    }
}
getHumanChoice();