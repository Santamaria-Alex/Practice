const quizData = [
    {
        question: "How old is Alex?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c",
    },
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the U.S. President?",
        a: "James Hetfield",
        b: "Dave Mustaine",
        c: "Joe Biden",
        d: "Donald Trump",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lambos",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "96",
        b: "95",
        c: "94",
        d: "None of the above",
        correct: "d",
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();


function loadQuiz (){

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    currentQuiz++;


}


submitBtn.addEventListener('click', ()=> {
    currentQuiz++;

    if (currentQuiz < quizData.length){
        loadQuiz();
    } else {
        //TODO: Show results
        alert("You finished.");
    }
})

