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

var timerEl = document.querySelector("#timer");
var start = document.querySelector("#start-quiz");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#options");
var submit = document.querySelector("#submit-score");
var nameEl = document.querySelector("#name");
