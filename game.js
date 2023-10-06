let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    let computerIcon;
    if (compChoice == 0) {
        computerIcon = "compRock";
    } else if (compChoice == 1) {
        computerIcon = "compScissors";
    } else {
        computerIcon = "compPaper";
    }
    document.getElementById(computerIcon).style.transform = "scale(1.5, 1.5)";
    return compChoice;
}

function playGame(player, computer, input) {
    //console.log("test2");
    //console.log(player);
    //console.log(computer);
    let victor;
    let score = player + computer;
    if (player - computer == 0) {
        victor = "DRAW";
    } else if (score == 2) {
        victor = "PAPER WINS";
    } else if (score == 3) {
        victor = "SCISSORS WINS";
    } else if (score == 1) {
        victor = "ROCK WINS";
    }
    //console.log(score);

    const showResult = document.querySelector("#result");
    result.textContent = victor;
    counter(score, input);
}

function getPlayerChoice(input, num) {

    document.getElementById(input).style.transform = "scale(1.5, 1.5)";
    let compResult = getComputerChoice();
    removeTransform(input, compResult);
   // console.log("test");
    playGame(num, compResult, input);
} 

    function removeTransform(player, computer) {
        document.getElementById(player).style.transform = "initial";
    }

function counter(score, input) {
    let result;
    if (score == 0) {
        playerScore = playerScore;
        computerScore = computerScore;
    }
    else if ((score == 2 && input == "paper") || (score == 3 && input == "scissors") || (score == 1 && input == "rock")) {
        playerScore++;
        result = document.querySelector("#playerScore");
        result.textContent = playerScore;
    } else {
        computerScore++;
        result = document.querySelector("#computerScore");
        result.textContent = computerScore;
    }
    
}