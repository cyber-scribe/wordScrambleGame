const wordText = document.querySelector(".word")
hintText = document.querySelector(".hint span")
//
inputField = document.querySelector(".input")
refreshBtn = document.querySelector(".refresh")
checkBtn = document.querySelector(".check")
timeText = document.querySelector(".time")
startBtn = document.querySelector(".bt")
scoreField = document.querySelector(".scre")
highScoreField = document.querySelector(".high-scre");

let correctWord;
let Count=0;
let Score =0
let highScore = 0;
let timerId      = null; 

const initTimer = (seconds) => {
  if (timerId) clearInterval(timerId);   
  let timeLeft = seconds;
  timeText.innerText = timeLeft;

  timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerId);
      timerId = null;
      alert("Time’s up!");

    Score = 0;
    showScore(score); 
    

      initGame();              
      return;
    }
    timeText.innerText = timeLeft;
  }, 1000);
};

const initGame = () =>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random()*words.length)];
    let wordArray = randomObj.word.split("");
    for(let i= wordArray.length-1;i>0;i--){
        let j =Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]] ;
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    inputField.value ="";
    correctWord = randomObj.word.toLowerCase();
}
initGame();

const checkWord = () =>{
    let userWord = inputField.value.toLowerCase();
    if(!userWord)return alert("Please enter a word!");
    if(userWord!==correctWord)return alert("Not correct!");
    else{
        alert('Yes! You got that right!');
        Count++;
        showScore(Count);
    }
    initGame();
    
}
const showScore = (count) =>{
  scoreField.innerText=count;
  if (count > highScore) {
    highScore = count;
    highScoreField.textContent = highScore;
  }
}


refreshBtn.addEventListener("click",initGame);

inputField.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    checkWord();
  }
});

startBtn.addEventListener("click",initGame);