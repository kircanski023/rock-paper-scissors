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
function getHumanChoice(){
    let result = prompt("Choose by typing Rock, Paper or Scissors: ")
    return result;
}

console.log(getComputerChoice());

console.log(getHumanChoice());