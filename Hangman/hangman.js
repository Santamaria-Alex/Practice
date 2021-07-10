const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

// later add a request to a server that generates random words.
const words = ['pantera', 'slayer', 'liliana', 'shogun', 'apocalypse'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `).join('')}
    `;

    //this function makes every word that get input into one line, otherwise, after each letter, a new line is created, so the full word could never be checked.
    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord){
        finalMessage.innerText = 'YOU DONE IT';
        popup.style.display = 'flex'
    }
    console.log(wordEl.innerText)
}


//update the wrong letters
function updateWrongLettersEl(){
    //display wrong input letters
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>WRONG</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)} 
    `;

    //shows hangman body parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors){
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    //check if user lost game
    if (wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'YOU DONE LOST';
        popup.style.display = 'flex';
    }
}


//show notification
function showNotification(){
    notification.classList.add('show');
    
    setTimeout(()=> {
        notification.classList.remove('show');
    }, 2000);
}


//keydown letter press
window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90 ){
        const letter = e.key;

        if (selectedWord.includes(letter)){
            if (!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else{
                showNotification;
            }
        }
    }
});


//restart game and play again
playAgainBtn.addEventListener('click', () => {
    //empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
});


displayWord();