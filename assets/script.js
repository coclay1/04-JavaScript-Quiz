var questions = [{
    question: "1. Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
    correctAnswer: 2
}, {
    question: "2. Where is the correct place to insert a JavaScript?",
    choices: ["In the <body>", "In the <head>", "Both options are correct", "None of the above"],
    correctAnswer: 3
}, {
    question: "3. What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>"],
    correctAnswer: 2
}, {
    question: "4. The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False"],
    correctAnswer: 2
}, {
    question: "5. How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');", "alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');"],
    correctAnswer: 2
}, {
    question: "6. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    choices: ["if i <> 5", "if (i <> 5)", "if (i != 5)", "if i =! 5 then"],
    correctAnswer: 3
}, {
    question: "7. What is the correct way to write a JavaScript array?",
    choices: ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')" ],
    correctAnswer: 3
}, {
    question: "8. JavaScript is the same as Java.",
    choices: ["True", "False"],
    correctAnswer: 2
}, {
    question: "9. How do you declare a JavaScript variable?",
    choices: ["var carName;", "variable carName;", "v carName;"],
    correctAnswer: 1
}, {
    question: "10. Which operator is used to assign a value to a variable?",
    choices: ["=", "-", "*", "x"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false; 
