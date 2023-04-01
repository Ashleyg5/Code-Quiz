var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var count = 75;
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var startContainer = document.querySelector("#starterContainer");
var quizContainer = document.querySelector("#quizContainer");

startBtn.addEventListener("click", function(event) {
    var element = event.target;
    var id = element.getAttribute("data-state");

    if (element.getAttribute("data-state") === "shown") {
        element.innerHTML = id;
        element.setAttribute("data-state", "hidden");   
    }
    
    if (element.getAttribute("data-state") === "hidden") {
        element.setAttribute("data-state", "shown");
    }

    startQuiz()
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

