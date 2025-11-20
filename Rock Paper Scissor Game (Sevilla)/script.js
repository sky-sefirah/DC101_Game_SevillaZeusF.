let userScore = 0; //default user score values//
let computerScore = 0; //default comp score values//
const userScore_span = document.getElementById("user-score");//links the user score elements from html//
const computerScore_span = document.getElementById("computer-score");//links the computer score element from html//
const scoreBoard_div = document.querySelector(".score-board");//links the score board div from html//
const result_p = document.querySelector(".result > p");//links the result p element from html//
const rock_div = document.getElementById("r");//links the rock, paper, scissor elements from html//
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const sound = new Audio('assets/Mouse Click Sound Effect.mp3'); //links the sound mp3//

function getComputerChoice() {//this is what makes the computer choose its answer//
    const choices = ['r','p','s'];//array of choices for computer numbered 0-2//
    const randomNumber = Math.floor(Math.random() * 3);//generates random number between 0-2//
    return choices[randomNumber];//returns the computer choice based on random number//
}

function convertToWord(letter) {//converts the the letter value to the full word//
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice) {//this fuction runs when user wins//
    const smallUserWord = " ".fontsize(3).sub();//can be used to add small text next to the result p  words//
    const smallCompWord = " ".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);//makes the user choice image glow//
    userScore++;//increases user score//
    userScore_span.innerHTML = userScore;//updates user score on html result p//
    computerScore_span.innerHTML = computerScore;//updates computer score on html result p//
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    userChoice_div.classList.add(`green-glow`);//makes the image border glow green//
    result_p.classList.add('green-text'); // add glow to result text
    setTimeout(() => {
        userChoice_div.classList.remove(`green-glow`);//removes the green glow after delay//
        result_p.classList.remove('green-text'); // remove after delay
    }, 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = " ".fontsize(3).sub();
    const smallCompWord = " ".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lose...`;
    userChoice_div.classList.add(`red-glow`);
    result_p.classList.add('red-text'); // add glow to result text
    setTimeout(() => {
        userChoice_div.classList.remove(`red-glow`);
        result_p.classList.remove('red-text'); // remove after delay
    }, 300);
}   

function draw(userChoice, computerChoice) {
    const smallUserWord = " ".fontsize(3).sub();
    const smallCompWord = " ".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw.`;
    userChoice_div.classList.add(`grey-glow`);
    result_p.classList.add('grey-text'); // add glow to result text
    setTimeout(() => {
        userChoice_div.classList.remove(`grey-glow`);
        result_p.classList.remove('grey-text'); // remove after delay
    }, 300);
}


function game(userChoice) { //plays the game, gets computer choice and decides win/lose/draw//
    const computerChoice = getComputerChoice();//gets computer choice//
    switch (userChoice + computerChoice) {//user choice, comp choice result//
        case "rs":
        case "pr":
        case "sp":
          win(userChoice, computerChoice);//win conditions//
          break;
        case "sr":
        case "rp":
        case "ps":
          lose(userChoice, computerChoice);//lose coditions//
          break;
        case "rr":
        case "PP":
        case "ss":
          draw(userChoice, computerChoice);//draw conditions//
          break;
    }
}


function main() {//this is the click listener function//
    rock_div.addEventListener('click', function () {
        sound.currentTime = 0;//resets sound to start//
        sound.play();//plays sound//
        game("r");})//callsgame function with user choice//
    paper_div.addEventListener('click', function () {
        sound.currentTime = 0;
        sound.play();
        game("p");})
    scissor_div.addEventListener('click', function () {
        sound.currentTime = 0;
        sound.play();
        game("s");})
}

main();