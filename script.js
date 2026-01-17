
//computerchoice takes a random number from computern (from1-3) and turns it into a variable
function capitalize (){
 let newString = string.substr(0,1).toUpperCase();
 let oldString = string.substr(1).toLowerCase();
return newString + oldString;
}
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
else {
 return 'not good'
}
}


// the toUpperCase function makes the answer to become case-insensitive
function getHumanChoice(){
    const answer = prompt('Choose between rock, paper and scissors')
const choice = answer.toUpperCase()
if (choice === 'PAPER'){
return 'Paper'
}
else if (choice === 'ROCK'){
    return 'Rock'
}
else if (choice === 'SCISSORS'){
    return 'Scissors'
}
};



let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    console.log("Human:", humanChoice, "Computerc:", computerChoice)
if ( humanChoice === 'Paper' && computerChoice === "Paper"){
console.log("it's a tie")
}
else if (humanChoice === "Paper" && computerChoice === "Rock"){
console.log('Paper beats Rock')
return ++humanScore

}
else if (humanChoice === "Paper" && computerChoice === "Scissors"){
    console.log('Scissors beats Paper')
return ++computerScore
}
else if (humanChoice === "Scissors" && computerChoice === "Paper"){
    console.log('Scissors beats Paper')
return ++humanScore
}
else if (humanChoice === "Scissors" && computerChoice === "Rock"){
    console.log('Rock beats Scissors')
 return ++computerScore
}
else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
console.log("it's a tie")
}
else if (humanChoice === "Rock" && computerChoice === "Paper"){
  console.log('Paper beats Rock')
return ++computerScore
}
else if (humanChoice === "Rock" && computerChoice === "Rock"){
    console.log("it's a tie")
}
else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log('Rock beats Scissors')
return ++humanScore
}
}
const humanSelector = getHumanChoice()
const computerSelector = getComputerChoice() 


playRound(humanSelector, computerSelector)

function playGame(){
    console.log('Computer: '+ `${computerScore}`+ ' ' + 'Human:' + `${humanScore}` )
    
    if (computerScore === 5 && humanScore <= 4){
    console.log('Cmputer wins!!!!')
    }
    else if (computerScore <= 4 && humanScore === 5){
        console.log('Human wins!!!!!!')
    }
else {
playGame(playRound(getHumanChoice(), computerSelector))

}
}
playGame()
console.log(humanScore)
console.log(computerScore)