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