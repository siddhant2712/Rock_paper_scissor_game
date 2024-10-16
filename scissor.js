let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".images");

const msg = document.querySelector("#msg");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#computer-score");
const rs = document.querySelector("#reset-button");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    var ch = Math.floor(Math.random() * 3);
    return options[ch];
    //rock paper scissors

}
const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Draw!";
};

const showWinner = (userWin , userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        us.innerText=userScore;
        msg.innerText = `You win !( ${userChoice} beats ${compChoice})`;
        msg.style.backgroundColor="lime";
        console.log('You win the match');
    }//catch me if you can hahahaha
    else {
        compScore++;
        cs.innerText=compScore;
        console.log("You lose");
        msg.style.backgroundColor="Red";
        msg.innerText = `You lose ! (${compChoice} beats ${userChoice})`;
    }
}

const resetGame=()=>{
    window.location.reload();
}

const playGame = (userChoice) => {
    console.log("User choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
    if (userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((images) => {
    images.addEventListener("click", () => {
        const userChoice = images.getAttribute("id");
        playGame(userChoice);
    });
});
rs.addEventListener("click", () => {
    console.log("Reser button is clicked");
    resetGame();
});