function hideElmentById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    const randomNum = Math.random() * 25;
    const index = Math.round(randomNum);
    const randomAlphabet = alphabet[index];
    return randomAlphabet;
}

function setBackgroundColor(element){
    const key = document.getElementById(element);
    key.classList.add('bg-orange-400');
}
function removeBackgroundColor(element){
    const key = document.getElementById(element);
    key.classList.remove('bg-orange-400');
}
function getElementValue(element){
    const elementValue = document.getElementById(element);
    const elementText = elementValue.innerText;
    const value = parseInt(elementText);
    return value;
}
function setElementValue(element,value){
    const setValue = document.getElementById(element);
    setValue.innerText = value;

}
function finalScore(){
    const finalScore = document.getElementById('final-score');
    const currentScore = document.getElementById('current-score');
    const score = currentScore.innerText;
    finalScore.innerText = score;
    return score;
}