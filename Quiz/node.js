const node = [
  {
    question: "Which JavaScript engine powers Node.js?",
    options: ["SpiderMonkey", "V8", "Chakra", "Rhino"],
    answer: "V8"
  },
  {
    question: "Which module is used to create a server in Node.js?",
    options: ["fs", "http", "net", "url"],
    answer: "http"
  },
  {
    question: "What is the default scope in Node.js for variables?",
    options: ["Global", "Module", "Function", "Block"],
    answer: "Module"
  },
  {
    question: "Which of the following is true about Node.js?",
    options: [
      "It is a programming language",
      "It runs JavaScript outside the browser",
      "It is only used for frontend",
      "It cannot handle asynchronous code"
    ],
    answer: "It runs JavaScript outside the browser"
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm start", "npm init", "node init", "node start"],
    answer: "npm init"
  },
  {
    question: "What is Node.js built on?",
    options: ["Java Virtual Machine", "V8 JavaScript Engine", "Python Interpreter", "Ruby on Rails"],
    answer: "V8 JavaScript Engine"
  },
  {
    question: "Which function is used to read files in Node.js?",
    options: ["fs.read()", "fs.readFile()", "readFile()", "read()"],
    answer: "fs.readFile()"
  },
  {
    question: "Which statement is correct about Node.js?",
    options: [
      "Node.js is synchronous by default",
      "Node.js is single-threaded and event-driven",
      "Node.js runs only in browsers",
      "Node.js cannot handle asynchronous operations"
    ],
    answer: "Node.js is single-threaded and event-driven"
  },
  {
    question: "Which of the following is NOT a core module in Node.js?",
    options: ["http", "fs", "url", "express"],
    answer: "express"
  },
  {
    question: "What does 'npm' stand for?",
    options: ["Node Package Manager", "New Project Manager", "Network Process Manager", "Node Programming Method"],
    answer: "Node Package Manager"
  }
];

let question=0;
let score=0;
let selectAnswer = "";
let btns = document.querySelectorAll(".btn");
let questionNumber = document.querySelector(".question-number");
let pquestion = document.querySelector("#ques-head");
let option1 = document.querySelector("#one");
let option2 = document.querySelector("#two");
let option3 = document.querySelector("#three");
let option4 = document.querySelector("#four");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

function loadQuestion(){
    let q = node[question];
    questionNumber.innerText = `${question+1}`;
    pquestion.innerText = q.question;
    option1.innerText = q.options[0];
    option2.innerText = q.options[1];
    option3.innerText = q.options[2];
    option4.innerText = q.options[3];
    selectAnswer = "";
    btns.forEach((button)=> button.classList.remove("active"));
  }

loadQuestion();

btns.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    e.preventDefault();
    btns.forEach((button)=> button.classList.remove("active"));
    btn.classList.add("active");
    selectAnswer = btn.innerText;
  });
});

nextBtn.addEventListener("click", ()=>{
  if(selectAnswer === node[question].answer){
    score++;
  }
  if(question < node.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${node.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

