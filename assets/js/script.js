var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector("#scorelink");
var count = 50;
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
var backBtn = document.querySelector("#goback");
var qIndex = 0;
var highscore = document.querySelector("#highscore");
var playC = new Audio("./assets/audio/correct.mp3");
var playI = new Audio("./assets/audio/incorrect.wav");


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
    },
    {
        q: "What does CSS stand for?",
        a: {
            1: "Cascading Style Sheets",
            2: "Colored Style Sheets",
            3: "Coding Style Sheets",
            4: "Coding Submission Sheets"
        },
        correctAns: "Cascading Style Sheets"
    }
];

function newQuestion() {

    question.textContent = myQuestions[qIndex].q;
    opt1.textContent = myQuestions[qIndex].a[1];
    opt2.textContent = myQuestions[qIndex].a[2];
    opt3.textContent = myQuestions[qIndex].a[3];
    opt4.textContent = myQuestions[qIndex].a[4];

    return;

}

function startQuiz() {

    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");



    function startTime() {

        timerInterval = setInterval(function () {
            count--;
            timerEl.textContent = "Time: " + count;

            if (count <= 0) {
                clearInterval(timerInterval);
                alert("Times Up!");

            }

        }, 1000);
    }

    startTime();
    newQuestion();
}

backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    initials.classList.add("hidden");
    startContainer.classList.remove("hidden");
    clearInterval(timerInterval);
    count = 50;
    timerEl.textContent = "Time: " + 0;
});


initialBtn.addEventListener("click", function () {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ name: input.value, score: count });
    localStorage.setItem("scores", JSON.stringify(scores));
    endGame();
})

function endGame () {

}

startBtn.addEventListener("click", startQuiz);

answerBtn.addEventListener("click", function (event) {


    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    var userChoice = event.target.innerText
    var correctAns = myQuestions[qIndex].correctAns

    if (userChoice !== correctAns) {
        count -= 10;//shorthand for count= count - 10
        timerEl.textContent = "Time: " + count;
        playI.play()

        if (count <= 0) {
            clearInterval(timerInterval);
            alert("Times Up!");
            score = 0;
        }
    } else { 
    playC.play() }
    qIndex++
    if (qIndex >= myQuestions.length) {
        quizContainer.classList.add("hidden");
        initials.classList.remove("hidden");
        timerEl.textContent = "Time: " + count;
        clearInterval(timerInterval);
        document.querySelector("#score").innerText = "YOUR SCORE: " + count;
        
        if (count <= 0) {
            clearInterval(timerInterval);
            alert("Times Up!");
            score = 0;
        }
        return;
    }

    newQuestion();
    
})

scoreBtn.addEventListener("click", function() {
    startContainer.classList.add("hidden");
    highscore.classList.remove("hidden");

    const string = localStorage.getItem("scores");
    const array = JSON.parse(string);
    console.log(array);
    const ul = document.createElement('ul');
    for(let i = 0; i < array.length; i++){
      const li = document.createElement('li');
      const text = document.createTextNode(`${array[i].name} : ${array[i].score}`);
      li.appendChild(text);
      ul.appendChild(li);
    }
   
    document.getElementById("allscores").appendChild(ul);
    
})

initialBtn.addEventListener("click", function () {
    initials.classList.add("hidden");
    highscore.classList.remove("hidden");

    const string = localStorage.getItem("scores");
    const array = JSON.parse(string);
    console.log(array);
    const ul = document.createElement('ul');
    for(let i = 0; i < array.length; i++){
      const li = document.createElement('li');
      const text = document.createTextNode(`${array[i].name} : ${array[i].score}`);
      li.appendChild(text);
      ul.appendChild(li);
    }
   
    document.getElementById("allscores").appendChild(ul); 
})

//NEED -
//when timer hits 0, it goes to highscore page
//when all answers are incorrect, the score needs to be 0 instead of going into the negative numbers
//timer reflect final number
//link highscore html to start as soon as the game is finished
//link localstorage to highscore html
//set go back button to return to index html
//set view highscores submit button to pull up the page with all highscores after initials are inputted

