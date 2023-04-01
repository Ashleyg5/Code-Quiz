var timerEl = document.querySelector("#timer");
var submitBtn = document.querySelector("#start");
var count = 75;

submitBtn.addEventListener("click", function() {
 startQuiz();
});

function startQuiz() {
    var timerInterval = setInterval(function() {
        count--;
        timerEl.textContent = "Time: " + count;

        if(count === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timerEl.textContent = " ";
}