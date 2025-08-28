const html = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which tag is used to display an image in HTML?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "<img>"
  },
  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["<ul>", "<ol>", "<list>", "<li>"],
    answer: "<ol>"
  },
  {
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>"
  },
  {
    question: "Which attribute is used to provide alternative text for an image?",
    options: ["alt", "title", "src", "href"],
    answer: "alt"
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<h1>", "<head>", "<header>"],
    answer: "<h1>"
  },
  {
    question: "Which tag is used to create a table row in HTML?",
    options: ["<td>", "<th>", "<tr>", "<row>"],
    answer: "<tr>"
  },
  {
    question: "Which attribute specifies the URL of an image in HTML?",
    options: ["src", "href", "alt", "link"],
    answer: "src"
  },
  {
    question: "Which tag is used to create a checkbox in HTML?",
    options: [
      "<input type='check'>",
      "<checkbox>",
      "<check>",
      "<input type='checkbox'>"
    ],
    answer: "<input type='checkbox'>"
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
    let q = html[question];
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
  if(selectAnswer === html[question].answer){
    score++;
  }
  if(question < html.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${html.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

