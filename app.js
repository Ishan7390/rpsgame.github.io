// Cache the DOM first!!
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementsByClassName("user-score");
const compScore_span = document.getElementsByClassName("comp-score");
// _ variables are DOM variables
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


// function for picking a random number
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
    // to get a random number between 0 and 3
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}
function win(userChoice, compChoice){
    // console.log("WIN");
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You Win`;
    document.getElementById
}
function lose(userChoice, compChoice){
    // console.log("LOST");
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(compChoice)}${smallCompWord}. You Lost...`;
}
function draw(userChoice, compChoice){
    // console.log("DRAWWW");
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord}. It's a Draw...`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    // console.log("user choice => " + userChoice);
    // console.log("comp choice => " + compChoice);
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;    
    }
}
    

function main() {
    rock_div.addEventListener('click', function(){
        // console.log("This is a ROCK, my friend")
        game("r");
    })

    paper_div.addEventListener('click', function(){
        // console.log("This is paper, my friend")
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        // console.log("This is Scissors, my friend")
        game("s");
    })
}

main();
