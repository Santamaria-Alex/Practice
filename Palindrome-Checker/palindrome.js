const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome);


function palindrome(){
    const word = document.querySelector('.input-text').value;
    let inputLength = word.length;

    let begWord = word.substring(0, Math.floor(inputLength / 2)).toLowerCase();

    let endWord = word.substring(inputLength - Math.floor(inputLength / 2)).toLowerCase();

    // let flip = endWord.split('').reverse().join('');
    let flip = [...endWord].reverse().join(''); //ES6, same as above

    if (begWord === flip){
        result.innerHTML = `${word.toUpperCase()} is a palindrome!`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`
    }

    // alert(flip);


}