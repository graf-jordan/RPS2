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
    document.getElementById(computerIcon).setAttribute("style", "opacity:0.5");
    return compChoice;
}

function playGame(player, computer, input) {
    console.log("test2");
    console.log(player);
    console.log(computer);
    let victor;
    let score = player - computer;
    if (player - computer == 0) {
        victor = "Draw!";
    } else if (player + computer == 2) {
        victor = "Paper wins!";
    } else if (player + computer == 3) {
        victor = "Scissors Wins!";
    } else if (player + computer == 1) {
        victor = "Rock wins!";
    }

    const showResult = document.querySelector("#result");
    result.textContent = victor;
    counter(player, computer, input);
}

function getPlayerChoice(input, num) {

    document.getElementById(input).setAttribute("style", "opacity:0.5");
    let compResult = getComputerChoice();
    console.log("test");
    playGame(num, compResult, input);
} 

function removeOpacity(player, computer) {

}

function counter(player, computer, input) {
}