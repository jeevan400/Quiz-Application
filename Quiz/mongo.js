const mongo = [
  {
    question: "What type of database is MongoDB?",
    options: ["Relational", "NoSQL", "Graph", "Key-Value"],
    answer: "NoSQL"
  },
  {
    question: "Which data format does MongoDB use to store documents?",
    options: ["XML", "JSON", "BSON", "CSV"],
    answer: "BSON"
  },
  {
    question: "What is the default port number of MongoDB?",
    options: ["3306", "27017", "1521", "8080"],
    answer: "27017"
  },
  {
    question: "Which method is used to insert a document in MongoDB?",
    options: ["insert()", "insertOne()", "add()", "push()"],
    answer: "insertOne()"
  },
  {
    question: "Which command is used to show all databases in MongoDB?",
    options: ["SHOW DATABASES", "db.show()", "show dbs", "list databases"],
    answer: "show dbs"
  },
  {
    question: "Which function is used to update a document in MongoDB?",
    options: ["update()", "updateOne()", "modify()", "change()"],
    answer: "updateOne()"
  },
  {
    question: "Which method is used to remove a document?",
    options: ["delete()", "remove()", "deleteOne()", "drop()"],
    answer: "deleteOne()"
  },
  {
    question: "What is a collection in MongoDB?",
    options: ["A table", "A row", "A schema", "A column"],
    answer: "A table"
  },
  {
    question: "Which operator is used for pattern matching in MongoDB?",
    options: ["LIKE", "$regex", "MATCH", "$like"],
    answer: "$regex"
  },
  {
    question: "Which command drops a collection?",
    options: ["db.drop()", "db.collection.drop()", "DROP TABLE", "deleteAll()"],
    answer: "db.collection.drop()"
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
    let q = mongo[question];
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
  if(selectAnswer === mongo[question].answer){
    score++;
  }
  if(question < mongo.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${mongo.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

