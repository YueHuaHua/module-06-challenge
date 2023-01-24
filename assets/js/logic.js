//  variable to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

// HTML elements
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");

let sfxRight = new Audio("assets/sfx/correct.wav");

function getQuestions() {

}


function questionClick() {

}

function quizEnd() {

}

function clockTick() {
    time--;
    timerElement.textContent = time;

    if (time <= 0){
        quizEnd();
    }
}

function startQuiz() {
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000);
}

function saveHighScore() {

}

function checkForEnter(event) {

}

startButton.addEventListener("click", startQuiz);

submitButton/addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);