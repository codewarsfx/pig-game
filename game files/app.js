//CODE WRITTEN BY INNOCENT CHIDERA SHAMMAH ON THE 15TH OF JANUARY 2019.
//TO INFINITY AND BEYOND
var  currentPlayer, scores, currentScore, dice;
dice=document.querySelector(".dice")
var controlBoo;
var winningScore;
initializeGame();
// firstly i define a function which defines what happens at the stat of each game round


function initializeGame(){
controlBool=true;
scores=[0,0];
currentPlayer=0;
currentScore=0;
dice.style.display="none";
document.querySelector(".modified").style.display="none"
document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";
document.getElementById("name-0").textContent="PLAYER 1";
document.getElementById("name-1").textContent="PLAYER 2";
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')
}
var diceVar,counter
diceVar=[]
counter=0

// attach event to the click of the roll dice button
document.querySelector(".btn-roll").addEventListener("click",function(){
// pick a random number between 0 and 6;

var firstPickRandom=Math.floor(Math.random()*6)+1;
var secondPickRandom=Math.floor(Math.random()*6)+1;
console.log(firstPickRandom)
console.log(secondPickRandom)
counter=counter===0?counter=1:counter=0;
diceVar[counter]=firstPickRandom
// console.log(diceVar[0])
// console.log(diceVar[1])
if(winningScore== undefined){
   alert("please enter a winning score")
}
else{
if(controlBool){
    if((diceVar[0]===6)&&(diceVar[1]===6)){
       
        document.getElementById("current-"+currentPlayer).textContent="0";
        document.getElementById("score-"+currentPlayer).textContent="0";
        scores[currentPlayer]=0;
        nextPlayer()

        
        
}
else{
    if(firstPickRandom!== 1 && secondPickRandom!==1 ){
        dice.src="dice-"+firstPickRandom+".png";
        document.querySelector(".modified").src="dice-"+secondPickRandom+".png"
        dice.style.display="block"
        document.querySelector(".modified").style.display="block";
        currentScore+=firstPickRandom+secondPickRandom;
        document.getElementById("current-"+currentPlayer).textContent=currentScore;
    }
    else{
        nextPlayer()
    };
}
}}});


//attach event to the hold button
document.querySelector(".btn-hold").addEventListener("click",function(){
if(controlBool){
scores[currentPlayer]+=currentScore;
document.getElementById("score-"+currentPlayer).textContent=scores[currentPlayer];
if (scores[currentPlayer]>=winningScore ){
 winnerCode()
}
else{
    nextPlayer()
}
}})

//attach event to the new game button

document.querySelector(".btn-new").addEventListener("click",initializeGame)


//event listener which accepts the winning score from players on the click of the enter button

document.querySelector(".enter").addEventListener("click",function(){
winningScore=document.querySelector(".winning-score").value;
document.querySelector(".winning-score").value=''
})




// the function below defines whta happens ehen its the next players turn
function nextPlayer(){
    document.getElementById("current-"+currentPlayer).textContent="0";
     currentPlayer=currentPlayer===0?currentPlayer=1:currentPlayer=0;
     currentScore=0;
     document.querySelector(".player-0-panel").classList.toggle("active")
     document.querySelector(".player-1-panel").classList.toggle("active")
     dice.style.display="none"
     document.querySelector(".modified").style.display="none"

}

//function defines what happens when we have a winner
function winnerCode(){
    document.getElementById("name-"+currentPlayer).textContent="WINNER!";
    document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
document.querySelector(".player-"+currentPlayer+"-panel").classList.remove("active")
dice.style.display="none"
controlBool=false;
}



