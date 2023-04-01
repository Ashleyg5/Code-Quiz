var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var count = 75;
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var container = document.getElementById("#quizContainer");
var questionEl = document.getElementById("#question");
var opt1 = document.getElementById("#opt1");
var opt2 = document.getElementById("#opt2");
var opt3 = document.getElementById("#opt3");
var opt4 = document.getElementById("#opt4");
var resultCont = document.getElementById("#result");


startBtn.addEventListener("click", function() {
    startQuiz();
});

function startQuiz() {
    var timerInterval = setInterval(function() {
        count--;
        timerEl.textContent = "Time: " + count;

        if(count === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
    

}

