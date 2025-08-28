const mysql = [
  {
    question: "What type of database is MySQL?",
    options: ["Relational", "NoSQL", "Document", "Graph"],
    answer: "Relational"
  },
  {
    question: "What is the default port number of MySQL?",
    options: ["1433", "1521", "27017", "3306"],
    answer: "3306"
  },
  {
    question: "Which command is used to show all databases in MySQL?",
    options: ["SHOW DBS", "LIST DATABASES", "SHOW DATABASES", "DBS LIST"],
    answer: "SHOW DATABASES"
  },
  {
    question: "Which SQL statement is used to create a new table?",
    options: ["CREATE DATABASE", "CREATE SCHEMA", "CREATE TABLE", "NEW TABLE"],
    answer: "CREATE TABLE"
  },
  {
    question: "Which keyword is used to sort results in ascending order?",
    options: ["ORDER BY", "SORT BY", "ASC", "SORT"],
    answer: "ORDER BY"
  },
  {
    question: "Which command is used to remove a table from the database?",
    options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "TRUNCATE TABLE"],
    answer: "DROP TABLE"
  },
  {
    question: "Which SQL function is used to count the number of rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
    answer: "COUNT()"
  },
  {
    question: "Which SQL keyword is used to prevent duplicate values?",
    options: ["UNIQUE", "PRIMARY", "DISTINCT", "FILTER"],
    answer: "DISTINCT"
  },
  {
    question: "Which clause is used to filter rows before grouping?",
    options: ["WHERE", "HAVING", "GROUP BY", "FILTER"],
    answer: "WHERE"
  },
  {
    question: "Which clause is used to filter grouped data?",
    options: ["WHERE", "HAVING", "GROUP", "FILTER"],
    answer: "HAVING"
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
    let q = mysql[question];
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
  if(selectAnswer === mysql[question].answer){
    score++;
  }
  if(question < mysql.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${mysql.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

