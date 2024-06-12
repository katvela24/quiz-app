// Global Variables (the variables that need to be everywhere i.e. score variable, array of questions, timer variable)
var startscreenEl = document.getElementById("startscreen")
var quizquestionsEl = document.getElementById("quizquestions")
var endscreenEl = document.getElementById("end-screen")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answers")
var highscoreEl = document.getElementById("high-score")
var highscoreviewEl = document.getElementById("view-score")

var questionindex = 0
var score = 0
var numSeconds = 60;
var timerEl = document.getElementById("timer")
var interval;

var questions = [

    {
        question: "What is the ideal data structure for storing a list of items?",
        answers: ["1. Variable", "2. Function", "3. Array", "4. Ids"],
        correctanswer: "3. Array"
    },
    {
        question: "2. In Javascript, what character key ends a statement?",
        answers: ["1. Period", "2. Semicolon", "3. Comma", "4. Question mark"],
        correctanswer: "2. Semicolon"
    },
    {
        question: "3. What keyword stores data values?",
        answers: ["1. Variable", "2. Function", "3. Array", "4. Ids"],
        correctanswer: "1. Variable"
    },

    {
        question: "4. Which Javascript method outputs useful messages?",
        answers: ["1. Variable", "2. Function", "3. Class", "4. Console.log"],
        correctanswer: "4. Console.log"

    },

    {
        question: "5. Which Javascript method waits for user interaction (e.g. a click of a button) before running the code?",
        answers: ["1. Event listener", "2. Object", "3. DOM", "4. Function"],
        correctanswer: "1. Event listener"
    }
]

// Functions (reusable blocks of code)

function startGame() {
    // Show the start screen
    startscreenEl.setAttribute("class", "show")

    // Hide the question part
    quizquestionsEl.setAttribute("class", "hide")

    // Reset question index back to 0
    questionindex = 0

    // Reset the score at the end of the game
    score = 0

    // Reset the timer seconds
    // numSeconds = secondsPerQuestion;
}

// asks an individual question
function askquestion() {
    var currentQuestion = questions[questionindex]

    var currentAnswers = currentQuestion.answers
    questionEl.innerText = currentQuestion.question
    questionEl.setAttribute("data-index", questionindex)
    // when a question is asked, throws away the previous question's answers before outputting the new question's answers
    answersEl.innerText = ""
    console.log(currentAnswers.length);
    for (var i = 0; i < currentAnswers.length; i++) {

        var button = document.createElement("button")

        button.innerText = currentAnswers[i]
        button.setAttribute("value", currentAnswers[i])
        answersEl.appendChild(button)
        button.onclick = checkanswer

    }

    // questionindex++
}
function checkanswer() {
    console.log("index", questionindex);
    console.log("length", questions.length - 1);

    if (this.value === questions[questionindex].correctanswer) {
        console.log("correct!")
        score = score + 10
    } else {
        console.log("incorrect")
        numSeconds = numSeconds - 10
        timerEl.textContent = "time: " + numSeconds
    }
    questionindex++
    if (questionindex !== questionindex.length - 1)
        clearInterval(interval);
    askquestions()
}

function endGame() {
    endscreenEl.setAttribute("class", "show")

    quizquestionsEl.setAttribute("class", "hide")

}
function askquestions() {


    //   start an interval to then ask the rest of the questions at a delay
    interval = setInterval(function () {
        numSeconds = numSeconds - 1
        timerEl.textContent = "time: " + numSeconds
        if (questionindex === questions.length || numSeconds <= 0) {
            clearInterval(interval)
            timerEl.textContent = "time: " + 0
            return endGame();
            // alert ("done")
        }
    }, 1000)

    // kicks off the first question
    askquestion();

}
// Main process (where you call the first couple of functions)

document.getElementById("startbutton").addEventListener("click", function () {
    startscreenEl.setAttribute("class", "hide")

    quizquestionsEl.setAttribute("class", "show")
    askquestions()
})

document.getElementById("view-score").addEventListener("click", function () {
    if (endscreenEl.classList.contains("show")) {
        endscreenEl.setAttribute("class", "hide")
    }
    else endscreenEl.setAttribute("class", "show")
    highscoreEl.setAttribute("class", "show")
})

// This is where we click submit for initials
document.getElementById("submit").addEventListener("click", function () {
    // testElement.classList.contains(className)
    if (endscreenEl.classList.contains("show")) {
        endscreenEl.setAttribute("class", "hide")
    }
    highscoreEl.setAttribute("class", "show")
    let initialsEL = document.getElementById("initials")
    let initialsDisplayEL = document.getElementById("initials-display")
    let scoreDisplayEL = document.getElementById("score-display")

    // console.log("initials", initialsEL);
    // console.log("testing", initialsEL.value);
    // console.log("ref", initialsDisplayEL);
    // console.log("score", score);
    initialsDisplayEL.innerHTML = initialsEL.value
    scoreDisplayEL.innerHTML = score


})

document.getElementById("go-back").addEventListener("click", function () {
    highscoreEl.setAttribute("class", "hide")
    startscreenEl.setAttribute("class", "show");
})


function startGame() {

}

