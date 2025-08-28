const gitHub = [
  {
    question: "Which command is used to upload local repository content to a remote repository on GitHub?",
    options: ["git pull", "git push", "git commit", "git clone"],
    answer: "git push"
  },
  {
    question: "What is the default branch name created by GitHub in new repositories (2020 onwards)?",
    options: ["master", "main", "origin", "develop"],
    answer: "main"
  },
  {
    question: "Which command is used to download a repository from GitHub to your local machine?",
    options: ["git clone", "git fetch", "git download", "git init"],
    answer: "git clone"
  },
  {
    question: "Which Git command is used to create a new branch?",
    options: ["git checkout", "git branch", "git init", "git commit"],
    answer: "git branch"
  },
  {
    question: "What is the purpose of a pull request on GitHub?",
    options: [
      "To delete a branch",
      "To request merging of code changes",
      "To create a new repository",
      "To update GitHub profile"
    ],
    answer: "To request merging of code changes"
  },
  {
    question: "What is GitHub primarily used for?",
    options: ["Hosting videos", "Version control and collaboration", "Web browsing", "Graphic designing"],
    answer: "Version control and collaboration"
  },
  {
    question: "Which version control system does GitHub use?",
    options: ["Mercurial", "Subversion", "Git", "CVS"],
    answer: "Git"
  },
  {
    question: "What does a 'fork' in GitHub mean?",
    options: ["Delete a repository", "Copy a repository to your account", "Merge two branches", "Create a backup"],
    answer: "Copy a repository to your account"
  },
  {
    question: "What is a pull request in GitHub?",
    options: ["A request to delete a repo", "A request to add or merge code changes", "A request to clone a repo", "A request to fork a repo"],
    answer: "A request to add or merge code changes"
  },
  {
    question: "Which file is commonly used in GitHub repositories to describe the project?",
    options: ["config.json", "readme.md", "index.html", "setup.exe"],
    answer: "readme.md"
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
    let q = gitHub[question];
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
  if(selectAnswer === gitHub[question].answer){
    score++;
  }
  if(question < gitHub.length-1){
    question++;
    loadQuestion();
  }
  else{
    window.location.href = `cong.html?score=${score}&total=${gitHub.length}`;
  }
});

prevBtn.addEventListener("click", ()=>{
  if(question > 0){
    question--;
    loadQuestion();
  }
});

