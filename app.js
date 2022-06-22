let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_Score");
const compScore_span = document.getElementById("comp_Score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getComputerChoice(){

    const choices = ['r', 'p', 's'];
   const randomNum = Math.floor(Math.random() * 3);

   return choices[randomNum];
}

function convertToWord(letter){

    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";

}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userlogo = "user".fontsize(3).sub();
    const complogo = "comp".fontsize(3).sub();
   result_p.innerHTML =` ${convertToWord(userChoice)} ${userlogo}  Beats ${convertToWord( computerChoice)} ${complogo}. you win! `;
   document.getElementById(userChoice).classList.add('greenglow');
   
   setTimeout(function() { document.getElementById(userChoice).classList.remove('greenglow') } , 300);
}

function lose(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userlogo = "user".fontsize(3).sub();
    const complogo = "comp".fontsize(3).sub();
   result_p.innerHTML =` ${convertToWord(userChoice)} ${userlogo}  lost to ${convertToWord( computerChoice)} ${complogo}. Try again! `;
   document.getElementById(userChoice).classList.add('redglow');
   
   setTimeout(function() { document.getElementById(userChoice).classList.remove('redglow') } , 300);
}


function draw(userChoice, computerChoice){

    const userlogo = "user".fontsize(3).sub();
    const complogo = "comp".fontsize(3).sub();
   result_p.innerHTML =` ${convertToWord(userChoice)} ${userlogo}  is same as ${convertToWord( computerChoice)} ${complogo}. Its a Draw! `;
   document.getElementById(userChoice).classList.add('grayglow');
   
   setTimeout(function() { document.getElementById(userChoice).classList.remove('grayglow') } , 300);
}


function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){

    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;

    case "sr":
    case "ps":
    case "rp":
        lose(userChoice, computerChoice);
        break;

    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
  }
}


function main() {
    rock_div.addEventListener('click', function() {
    game("r");
    })

    paper_div.addEventListener('click', function() {
    game("p");
    })

    scissor_div.addEventListener('click', function() {
        game("s");
    })

}

main();
