var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var count = 75;
var startContainer = document.querySelector("#starterContainer");
var quizContainer = document.querySelector("#quizContainer");
var question = document.querySelector("question");
var result = document.querySelector("#result");
var qIndex = 0;
//  innerHTML = ""

var myQuestions = [
    {
        q: "In which HTML elements do we put in JavaScript code?",
        a: {
            1: "<js>",
            2: "<script>",
            3: "<body>",
            4: "<head>"
        },
        correctAns: "2"
    },
    {
        q: "Which HTML attribute is used to reference an external JavaScript file?",
        a: {
            1: "<src>",
            2: "<p>",
            3: "<footer>",
            4: "<Java>"
        },
        correctAns: "1"
    },
    {
        q: "What does HTML stand for?",
        a: {
            1: "Hyper Text Preprocessor",
            2: "Hyper Text Multiple Language",
            3: "Hyper Tool Multi Language",
            4: "Hyper Text Markup Langauge"
        },
        correctAns: "4"
    },
    {
        q: "What does JavaScript provide to code?",
        a: {
            1: "Curb Appeal",
            2: "The Foundation",
            3: "Functionality",
            4: "None Of The Above"
        },
        correctAns: "3"
    }
];

function startQuiz() {

    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
   

    
    function startTime() {

        var timerInterval = setInterval(function () {
            count--;
            timerEl.textContent = "Time: " + count;

            if (count === 0) {
                clearInterval(timerInterval);
            }

        }, 1000);
    }
    function newQuestion() {

        question.innerHTML = myQuestions[qIndex].question


    }

//  result.classList.remove("hidden");



    startTime();
    newQuestion();
}


//sound effects on correct/ incorrect

startBtn.addEventListener("click", startQuiz);