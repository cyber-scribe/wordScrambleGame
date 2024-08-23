const wordText = document.querySelector(".word")
hintText = document.querySelector(".hint span")
refreshBtn = document.querySelector(".refresh");


const initGame = () =>{
    let randomObj = words[Math.floor(Math.random()*words.length)];
    let wordArray = randomObj.word.split("");
    for(let i= wordArray.length-1;i>0;i--){
        let j =Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]] ;
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    console.log(randomObj);
}
initGame();
refreshBtn.addEventListener("click",initGame);