const wordText = document.querySelector(".word")
hintText = document.querySelector(".hint span")
inputField = document.querySelector(".input")
refreshBtn = document.querySelector(".refresh")
checkBtn = document.querySelector(".check");

let correctWord;


const initGame = () =>{
    let randomObj = words[Math.floor(Math.random()*words.length)];
    let wordArray = randomObj.word.split("");
    for(let i= wordArray.length-1;i>0;i--){
        let j =Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]] ;
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
}
initGame();

const checkWord = () =>{
    let userWord = inputField.value.toLowerCase();
    if(!userWord)return alert("Please enter a word!");
    if(userWord!==correctWord)return alert("Not correct!");
    alert('Yes! You got that right!');
}
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);