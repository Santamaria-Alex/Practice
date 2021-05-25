const quizData = [
    {
        question: "When did ya'll meet?",
        a: "June 24, 2017",
        b: "June 24, 2016",
        c: "February 13, 2017",
        d: "February 15, 2017",
        correct: "d",
    },
    {
        question: "When did ya'll become a couple?",
        a: "June 24, 2017",
        b: "June 24, 2016",
        c: "February 13, 2017",
        d: "February 15, 2017",
        correct: "a",
    },
    {
        question: "Who is Alex's favorite band of all time?",
        a: "Metallica",
        b: "Slayer",
        c: "Pantera",
        d: "Tool",
        correct: "c",
    },
    {
        question: "What football club does Alex support?",
        a: "Liverpool",
        b: "Spurs",
        c: "Texans",
        d: "Barcelona",
        correct: "a",
    },
    {
        question: "Do you want to be with me forever, and ever?",
        a: "Yes",
        b: "Hell Yes",
        c: "Claro que si",
        d: "All of the above",
        correct: "d",
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();


// replaces the html with data in quizData
function loadQuiz (){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}


submitBtn.addEventListener('click', () => {
    // checks to see answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3>You answered ${score}/${quizData.length} questions correctly.</h3> <button onclick="location.reload()">Reload</button>`
        }
    }
});



