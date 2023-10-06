function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3);
    let computerIcon;
    if (compChoice == 0) {
        computerIcon = "compRock";
    } else if (compChoice == 1) {
        computerIcon = "compPaper";
    } else {
        computerIcon = "compScissors";
    }
    document.getElementById(computerIcon).setAttribute("style", "opacity:0.5");
    return compChoice;
}

function playGame(player, computer) {
    console.log("test2");
    console.log(player);
    console.log(computer);
    if (player - computer == 0) {
        alert("Draw!");
    } else if (player - computer == 1) {
        alert("Paper wins!");
    } else if (player - computer == 2 || player - computer == -2) {
        alert("Rock wins!");
    } else if (player - computer == -1) {
        alert("Scissors wins!");
    }
}

function getPlayerChoice(input, num) {
    document.getElementById(input).setAttribute("style", "opacity:0.5");
    let compResult = getComputerChoice();
    console.log("test");
    playGame(num, compResult);
} 