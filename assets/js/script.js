//var declarations
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector("#scorelink");
var count = 50;
var startContainer = document.querySelector("#starterContainer");
var quizContainer = document.querySelector("#quizContainer");
var question = document.querySelector("#question");
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


var myQuestions = [ //my question object array beginning
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
];//my question object array end

//beginning of my startquiz function
function startQuiz() {
    //adds class of hidden to the start container
    startContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    //removes class of hidden to quiz container

    //start time function which sets the timer 
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
}//end of startquiz function which calls starttime function and newquestion function

//beginning of my newquestion function which cycles through all questions and options
function newQuestion() {

    question.textContent = myQuestions[qIndex].q;
    opt1.textContent = myQuestions[qIndex].a[1];
    opt2.textContent = myQuestions[qIndex].a[2];
    opt3.textContent = myQuestions[qIndex].a[3];
    opt4.textContent = myQuestions[qIndex].a[4];



}//end of my newquestion function

//startbtn event listner which begins the first function, startquiz
startBtn.addEventListener("click", startQuiz);

//answerbtn event listener which contains if statements that check for incorrect/correct answers and shows the current timer count 
answerBtn.addEventListener("click", function (event) {


    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    var userChoice = event.target.innerText
    var correctAns = myQuestions[qIndex].correctAns

    if (userChoice !== correctAns) {
        count -= 10;//shorthand for count= count - 10
        timerEl.textContent = "Time: " + count;
        playI.play()//incorrect sound variable

        if (count <= 0) {
            clearInterval(timerInterval);
            alert("Times Up!");
            score = 0;
        }
    } else {
        playC.play()
    }//correct sound variable
    qIndex++//cycles through the qindex
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

})//end of answerbtn event listener 

//initialbtn event listener which logs the scores to the local storage
initialBtn.addEventListener("click", function () {
    var scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ name: input.value, score: count });
    localStorage.setItem("scores", JSON.stringify(scores));

})

//initialbtn event listener (view highscores button at the end of the came) which adds a hidden class to the start container and removes the hidden class from the highscore container displays the saved scores on the page
initialBtn.addEventListener("click", function () {
    initials.classList.add("hidden");
    highscore.classList.remove("hidden");

    const string = localStorage.getItem("scores");
    const array = JSON.parse(string);
    console.log(array);
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        const text = document.createTextNode(`${array[i].name} : ${array[i].score}`);
        li.appendChild(text);
        ul.appendChild(li);
    }

    document.getElementById("allscores").appendChild(ul);
})

//scorebtn event listener (top left view highscore button) which adds a hidden class to the start container and removes the hidden class from the highscore container, the displays saved scores on page
scoreBtn.addEventListener("click", function () {
    startContainer.classList.add("hidden");
    highscore.classList.remove("hidden");

    const string = localStorage.getItem("scores");
    const array = JSON.parse(string);
    console.log(array);
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        const text = document.createTextNode(`${array[i].name} : ${array[i].score}`);
        li.appendChild(text);
        ul.appendChild(li);
    }

    document.getElementById("allscores").appendChild(ul);

})


//backbtn event listener (go back button at the end of the game) which adds a class of hidden to the initials element and removes the hidden class on the start container and resets the timer
backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    initials.classList.add("hidden");
    startContainer.classList.remove("hidden");
    clearInterval(timerInterval);
    count = 50;
    timerEl.textContent = "Time: " + 0;
});







