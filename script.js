
//computerchoice takes a random number from computern (from1-3) and turns it into a variable
function getComputerChoice(){
const result = Math.floor(Math.random()* 3) +1;
if(result === 1){
    return'Paper'
}
else if (result === 2){
    return 'Rock'
}
else if (result === 3){
    return'Scissors'
}
}
const div = document.querySelector("#gameplay");
const buttonR = document.createElement("button");
const buttonP = document.createElement("button");
const buttonS = document.createElement("button");

div.appendChild(buttonR);
div.appendChild(buttonP);
div.appendChild(buttonS);

buttonR.addEventListener("click", () => {
    const computerSelector = getComputerChoice()    
    const humanSelector = "Rock"
    playRound(humanSelector, computerSelector)
});
buttonP.addEventListener("click", () =>{
    const computerSelector = getComputerChoice()    
    const humanSelector = "Paper"
    playRound(humanSelector, computerSelector)
 
});
buttonS.addEventListener("click", () => {
    const computerSelector = getComputerChoice() 
    const humanSelector = "Scissors"
    playRound(humanSelector, computerSelector)
});

buttonR.textContent = "Rock"
buttonP.textContent = "Paper"
buttonS.textContent = "Scissors"

const displaya = document.createElement("div")
displaya.classList.add("display")

const para = document.createElement("p")
para.classList.add("para")

const display = document.createElement('p')
display.classList.add("displaya");

const paraAB = document.createElement("p");
paraAB.classList.add("paraAB");

const paraWIN = document.createElement("p");
paraWIN.classList.add("paraWIN");


let humanScore = 0
let computerScore = 0

const name = prompt("Enter name:");


function playRound(humanChoice, computerChoice){
    para.textContent =`${name}:` + " " + humanChoice + " "+ " " + "Computer:" + " " + computerChoice;
if ( humanChoice === 'Paper' && computerChoice === "Paper"){
display.textContent = "it's a tie"
}
else if (humanChoice === "Paper" && computerChoice === "Rock"){
display.textContent ='Paper beats Rock'
++humanScore

}
else if (humanChoice === "Paper" && computerChoice === "Scissors"){
    display.textContent ='Scissors beats Paper'
 ++computerScore
}
else if (humanChoice === "Scissors" && computerChoice === "Paper"){
    display.textContent ='Scissors beats Paper'
 ++humanScore
}
else if (humanChoice === "Scissors" && computerChoice === "Rock"){
   display.textContent ='Rock beats Scissors'
  ++computerScore
}
else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
display.textContent ="it's a tie"
}
else if (humanChoice === "Rock" && computerChoice === "Paper"){
  display.textContent ='Paper beats Rock'
 ++computerScore
}
else if (humanChoice === "Rock" && computerChoice === "Rock"){
display.textContent ="it's a tie"
}
else if (humanChoice === "Rock" && computerChoice === "Scissors"){
display.textContent ='Rock beats Scissors'
 ++humanScore
};
paraAB.textContent = `${name}:` +" "+ `${humanScore}` + " " + " "+"computer:" + " "+`${computerScore}`;

if (humanScore === 5 && computerScore < 5 ){
    paraWIN.textContent = "human wins";
}
else if (computerScore === 5 && humanScore < 5){
    paraWIN.textContent = `${name}`+" wins"
}
else {
};
}
div.appendChild(displaya);
displaya.appendChild(para);
displaya.appendChild(display)
displaya.appendChild(paraAB);
displaya.appendChild(paraWIN);
