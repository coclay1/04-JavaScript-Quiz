// Q&A List
var questions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
    correctAnswer: "<script>"
}, {
    question: "2. Where is the correct place to insert a JavaScript?",
    choices: ["In the <body>", "In the <head>", "Both options are correct", "None of the above"],
    correctAnswer: "Both options are correct"
}, {
    question: "3. What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>"],
    correctAnswer: "<script src='xxx.js'>"
}, {
    question: "4. The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    correctAnswer: "False"
}, {
    question: "5. How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');", "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');"],
    correctAnswer: "alert('Hello World');"
}, {
    question: "6. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    choices: ["if i <> 5", "if (i <> 5)", "if (i != 5)", "if i =! 5 then"],
    correctAnswer: "if (i != 5)"
}, {
    question: "7. What is the correct way to write a JavaScript array?",
    choices: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')" ],
    correctAnswer: "var colors = ['red', 'green', 'blue']"
}, {
    question: "8. JavaScript is the same as Java.",
    choices: ["True", "False"],
    correctAnswer: "False"
}, {
    question: "9. How do you declare a JavaScript variable?",
    choices: ["var carName;", "variable carName;", "v carName;"],
    correctAnswer: "var carName;"
}, {
    question: "10. Which operator is used to assign a value to a variable?",
    choices: ["=", "-", "*", "x"],
    correctAnswer: "="
}];
// Dom Elements
var timerEl = document.querySelector("#timer");
var start = document.querySelector("#start-quiz");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#options");
var submit = document.querySelector("#submit-score");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback")
// Webpage initial state
var currentQuestionIndex = 0
var time = questions.length * 20
var timerId;
// Start Quiz and hide initial page
function startQuiz() {
    timerId = setInterval(clockTime, 1000);
    timerEl.textContent = time;
    var startScreenEl = document.querySelector("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}
// Displays questions and answer and loops through the array and create btns
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var promptEl = document.querySelector("#prompt");
    promptEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice,i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAtrribute("value", choice);
        choiceBtn.textContent = i + 1 + "." + choice;
        choiceBtn.onClick = questionClick;
        choicesEl.qppendChild(choiceBtn);
    }); 
}
// Checks for answer and deduct time from timer if wrong
function questionClick() {
    if (this.value !== questions[currentQuestionIndex].correctAnswer) {
        time -= 10;
        if (time < 0 ) {
            time = 0
        }
        timerEl.textContent = time;
        feedbackEl.textContent = `Sorry the answer was ${questions[currentQestionIndex].answer}`;
        feedbackEl.style.color = "red";
    } else {
        feedbackEl.textContent = "Good job!";
        feedbackEl.style.color = "green";
    }
    feedbackEl.setAttribute = ("class", "feedback");
    setTimeout(function() {
        feedbackEl.setAtrribute("class", "feedback-hide");
    }, 1000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    }else {
        getQuestion();
    }
}
// End quiz shows final score
function quizEnd() {
    clearInterval(timerId);
    var endScreenEl = document.querySelector("#quiz-end");
    endScreenEl.removeAttribute("class");
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class", "hide");
}
// To end quiz if timer = 0
function clockTime() {
    time--;
    timerEl.textContent = time;
    if time (< 0) {
        quizEnd();
    }
}

