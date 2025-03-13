//Write a function that returns a random string of "Rock" "Paper" or "Scissors"
function getComputerResult(){
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
    return console.log(result)
}

getComputerResult();