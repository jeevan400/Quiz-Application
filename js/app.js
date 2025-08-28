let searchInp = document.querySelector(".search-inp");
let searchBtn = document.querySelector(".search-btn");
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let javaScript = document.querySelector(".javascript");
let node = document.querySelector(".node");
let gitHub = document.querySelector(".gitHub");
let mongo = document.querySelector(".mongo");
let sql = document.querySelector(".mysql");
let searchItems = [html, css, javaScript, node, gitHub, mongo, sql];

// let searchValue = searchInp.value;
searchBtn.addEventListener("click", ()=>{
    let inputValue = searchInp.value.toLowerCase().trim();
    console.log(inputValue);
    let found = false;
    // console.log(searchInp.value);
    for(let i=0; i<searchItems.length; i++){
        let itemClass = searchItems[i].getAttribute("class").toLowerCase();
        if(inputValue == itemClass){
            console.log("Matched: " + itemClass);
            startQuiz(itemClass); 
            found = true;
            let divSearch = document.createElement("div");
            let searchBar = document.querySelector(".search-bar");
            divSearch.classList.add("item-search");
            let clone = searchItems[i].cloneNode(true);
            divSearch.appendChild(clone);
            searchBar.appendChild(divSearch);
            break;
        }
    }
    if(!found){
        console.log("No match found for: " + inputValue);
    }
});
function startQuiz(topic) {
  console.log("Quiz started for: " + topic);
  
}