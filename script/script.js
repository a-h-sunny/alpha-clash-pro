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
    continueGame();
 }