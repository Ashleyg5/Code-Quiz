var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var count = 75;

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

