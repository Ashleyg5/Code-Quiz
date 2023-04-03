var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var count = 75;
var startContainer = document.querySelector("#starterContainer");
var quizContainer = document.querySelector("#quizContainer");
var question = document.querySelector("#question");
var result = document.querySelector("#result");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var answerBtn = document.querySelector("#answerBtns");
var initials = document.querySelector("#initials");
var timerInterval;
var score = document.querySelector("#score");
var input = document.querySelector("#initialInput");
var initialBtn = document.querySelector("#initialBtn");
var qIndex = 0;


var myQuestions = [
    {
        q: "In which HTML elements do we put in JavaScript code?",
        a: {
            1: "<js>",
            2: "<script>",
            3: "<body>",
            4: "<head>"
        },
        correctAns: "<script>"
    },
    {
        q: "Which HTML attribute is used to reference an external JavaScript file?",
        a: {
            1: "<src>",
            2: "<p>",
            3: "<footer>",
            4: "<Java>"
        },
        correctAns: "<src>"
    },
    {
        q: "What does HTML stand for?",
        a: {
            1: "Hyper Text Preprocessor",
            2: "Hyper Text Multiple Language",
            3: "Hyper Tool Multi Language",
            4: "Hyper Text Markup Langauge"
        },
        correctAns: "Hyper Text Markup Langauge"
    },
    {
        q: "What does JavaScript provide to code?",
        a: {
            1: "Curb Appeal",
            2: "The Foundation",
            3: "Functionality",
            4: "None Of The Above"
        },
        correctAns: "Functionality"
    }
];
    function newQuestion() {

    question.textContent = myQuestions[qIndex].q;
        opt1.textContent = myQuestions[qIndex].a[1];
        opt2.textContent = myQuestions[qIndex].a[2];
        opt3.textContent = myQuestions[qIndex].a[3];
        opt4.textContent = myQuestions[qIndex].a[4];


    }

function startQuiz() {

    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
   

    
    function startTime() {

         timerInterval = setInterval(function () {
            count--;
            timerEl.textContent = "Time: " + count;

            if (count === 0) {
                clearInterval(timerInterval);
            }

        }, 1000);
    }

//  result.classList.remove("hidden");

    startTime();
    newQuestion();
}


//sound effects on correct/ incorrect
initialBtn.addEventListener("click", function() {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({name:input.value,score:count});
    localStorage.setItem("scores", JSON.stringify(scores));
})

startBtn.addEventListener("click", startQuiz);

answerBtn.addEventListener("click", function (event) {

    if (event.target.nodeName !== "BUTTON") {
        return;
    } 
    var userChoice = event.target.innerText
    var correctAns = myQuestions[qIndex].correctAns

    if (userChoice !== correctAns) {
       count-= 10;//shorthand for count= count - 10
    } 
    qIndex++
    if (qIndex >= myQuestions.length) {
    quizContainer.classList.add("hidden");
        initials.classList.remove("hidden");
        clearInterval(timerInterval);
        document.querySelector("#score").innerText = "YOUR SCORE " + count;
        return;

    }
    newQuestion();
})

