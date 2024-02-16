function handleKeyupEvent(event){
    const pressedKey = event.key;

    const alphabet = document.getElementById('current-alphabet');
    const currentAlphabet = alphabet.innerText;
    const displaydAlphabet = currentAlphabet.toLowerCase();
    if(pressedKey===displaydAlphabet){
        console.log('you got a point')
        removeBackgroundColor(displaydAlphabet);
        const score = getElementValue('current-score');
        const newScore = score + 1;
        setElementValue('current-score',newScore);
        
        // -------------
        // const currentScore = document.getElementById('current-score');
        // const scoreValue = currentScore.innerText;
        // const score = parseInt(scoreValue);
        // const newScore = score + 1;
        // currentScore.innerText = newScore;
        continueGame();
    }
    else{
        console.log('you lost a life')
        removeBackgroundColor(displaydAlphabet);
        const life = getElementValue('total-life');
        const remainingLife = life - 1;
        setElementValue('total-life',remainingLife);

        if(remainingLife === 0){
            hideElmentById('play-ground');
            showElementById('score');
            finalScore();
        }

        // ---------------------------
        // const totalLife = document.getElementById('total-life');
        // const lifeText = totalLife.innerText;
        // const lifeNum = parseInt(lifeText);
        // const remainingLife = lifeNum - 1;
        // totalLife.innerText = remainingLife;
        continueGame();
    }
}
document.addEventListener('keyup',handleKeyupEvent);

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColor(alphabet);
}

function play(){
//     // hide home section
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');
//     // show play section
//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');
    
    // using utility function
    hideElmentById('home');
    showElementById('play-ground');
    hideElmentById('score');
    setElementValue('total-life',5);
    setElementValue('current-score',0);
    continueGame();
 }