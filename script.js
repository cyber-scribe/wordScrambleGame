const wordText = document.querySelector(".word")
hintText = document.querySelector(".hint span")
inputField = document.querySelector(".input")
refreshBtn = document.querySelector(".refresh")
checkBtn = document.querySelector(".check")
timeText = document.querySelector(".time")
startBtn = document.querySelector(".bt")
scoreField = document.querySelector(".scre");

let correctWord;
let Count=0;

const initTimer = maxTime =>{
   timer = setInterval(()=>{
        
         if(maxTime>=0){
            timeText.innerText= maxTime;
            maxTime--;         
          }
        else{
            alert("Time's up!");
        }
   },1000);
}

const initGame = () =>{
    initTimer(60);
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
}


refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);
startBtn.addEventListener("click",initGame);