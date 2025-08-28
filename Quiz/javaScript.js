const script = [
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Integer", "Object"],
    answer: "Integer"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "alert('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"],
    answer: "alert('Hello World');"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "=="],
    answer: "="
  },
  {
    question: "Which function is used to parse a string to integer in JavaScript?",
    options: ["parseInt()", "parseFloat()", "Number()", "int()"],
    answer: "parseInt()"
  },
  {
    question: "What will `typeof []` return in JavaScript?",
    options: ["array", "object", "list", "undefined"],
    answer: "object"
  },
  {
    question: "Which method is used to join two or more arrays?",
    options: ["concat()", "join()", "merge()", "append()"],
    answer: "concat()"
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "constant", "const"],
    answer: "const"
  },
  {
    question: "Which function is used to convert JSON data to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"],
    answer: "JSON.parse()"
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
    let q = script[question];
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
  if(selectAnswer === script[question].answer){
    score++;
  }
  if(question < script.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${script.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

