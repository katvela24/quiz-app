// Global Variables (the variables that need to be everywhere i.e. score variable, array of questions, timer variable)
var startscreenEl = document.getElementById("startscreen")
var quizquestionsEl = document.getElementById("quizquestions")
var endscreenEl = document.getElementById("end-screen")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answers")
var highscoreEl = document.getElementById("high-score")

var questionindex = 0
var score = 0
var numSeconds = 60;
var timerEl = document.getElementById("timer")
let interval;

var questions = [

    {
        question: "What is the ideal data structure for storing a list of items?",
        answers: ["variable", "function", "array", "ids"],
        correctanswer: "array"
    },
    {
        question: "In Javascript, what character key ends a statement?",
        answers: ["period", "semicolon", "comma", "question mark"],
        correctanswer: "semicolon"
    },
    {
        question: "What keyword stores data values?",
        answers: ["variable", "function", "array", "ids"],
        correctanswer: "variable"
    },

    {
        question: "Which Javascript method outputs useful messages?",
        answers: ["variable", "function", ".class", "console.log"],
        correctanswer: "console.log"

    },

    {
        question: "Which Javascript method waits for user interaction (e.g. a click of a button) before running the code?",
        answers: ["event listener", "object", "DOM", "function"],
        correctanswer: "event listener"
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
    } else {
        console.log("incorrect")
        numSeconds = numSeconds - 10
        timerEl.textContent = numSeconds
    }
    questionindex++
    askquestions()
}

function endGame() {
    endscreenEl.setAttribute("class", "show")

    quizquestionsEl.setAttribute("class", "hide")

}
function askquestions() {

    // kicks off the first question
    askquestion();


    //   start an interval to then ask the rest of the questions at a delay
    interval = setInterval(function () {
        numSeconds = numSeconds - 1
        timerEl.textContent = numSeconds
        if (questionindex === questions.length) {
            clearInterval(interval)
            timerEl.textContent = 0
            return endGame();
            // alert ("done")
        }

    }, 1000)


}
// Main process (where you call the first couple of functions)

document.getElementById("startbutton").addEventListener("click", function () {
    startscreenEl.setAttribute("class", "hide")

    quizquestionsEl.setAttribute("class", "show")
    askquestions()
})

document.getElementById("submit").addEventListener("click", function () {
    let initialsEL = document.getElementById("initials")
    endscreenEl.setAttribute("class", "hide")
    console.log("testing",initialsEL.value);
    console.log("testing2",initialsEL.innerHTML);
    highscoreEl.setAttribute("class", "show")
})

function startGame() {

}

