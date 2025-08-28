const css = [
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["color", "background-color", "font-color", "text-color"],
    answer: "color"
  },
  {
    question: "Which property is used to change the background of an element?",
    options: ["color", "bgcolor", "background", "background-color"],
    answer: "background-color"
  },
  {
    question: "Which of the following is the correct syntax for adding a comment in CSS?",
    options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
    answer: "/* comment */"
  },
  {
    question: "Which CSS property controls the size of text?",
    options: ["font-weight", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "How do you make text bold in CSS?",
    options: ["font-weight: bold;", "text-decoration: bold;", "style: bold;", "font: bold;"],
    answer: "font-weight: bold;"
  },
  {
    question: "Which property is used to set the spacing between letters?",
    options: ["letter-spacing", "word-spacing", "text-spacing", "line-height"],
    answer: "letter-spacing"
  },
  {
    question: "Which property is used to align text in CSS?",
    options: ["align", "text-align", "text-style", "font-align"],
    answer: "text-align"
  },
  {
    question: "Which CSS property is used to make corners of a box round?",
    options: ["border-style", "border-radius", "border-round", "corner-radius"],
    answer: "border-radius"
  },
  {
    question: "Which CSS property is used to control the space between lines of text?",
    options: ["line-spacing", "line-height", "text-spacing", "text-height"],
    answer: "line-height"
  },
  {
    question: "Which CSS property is used to make an element completely invisible?",
    options: ["hidden: true;", "display: none;", "opacity: 0;", "Both B and C"],
    answer: "Both B and C"
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
    let q = css[question];
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
  if(selectAnswer === css[question].answer){
    score++;
  }
  if(question < css.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${css.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

