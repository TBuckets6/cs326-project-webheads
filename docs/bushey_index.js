const codingPic = document.getElementById('codingPic');
const mathPic = document.getElementById('mathPic');
const bballPic = document.getElementById('bballPic')
const topics = document.getElementById('topics');
const difficulty = document.getElementById('difficulty');
const timeLimit = document.getElementById('timeLimit');
const startBtn = document.getElementById('start');
const initDisplay = document.getElementById('initDisplay');


function saveState(){
    window.localStorage.setItem('difficulty', JSON.stringify(difficulty.value)); //saves the difficulty as a string ("normal" or "hard").
}

function restoreState(){
    let diff = window.localStorage.getItem('difficulty');  
}

//saveState();

function displayQuiz(){

}

//When called, this fucnction will allow each button to be clicked.
function enableButtons(){
    difficulty.removeAttribute("disabled");
    timeLimit.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
}




codingPic.addEventListener("click", () => {
    enableButtons();
    
    
});

mathPic.addEventListener("click", () => {
    enableButtons();
    
});


bballPic.addEventListener("click", () => {
    enableButtons();
    
});


startBtn.addEventListener("click", () => {
    initDisplay.style.display = "none";
    
    //displayQuiz();
    
});
/*
codingPic.addEventListener("click", () => {
    enableButtons();
});


mathPic.addEventListener("click", () => {
    enableButtons();
});
*/

/*
function func(){
    let x = 3;
    return x;
}    

mathPic.addEventListener("click", func)

let x = func();
console.log(x)
*/

    /*
    topics.style.display = "none";
    document.getElementById('header2').style.display = "none";
    const difficulty = document.createElement("div"); 
    const normal_diff = document.createElement("input");
    normal_diff.setAttribute('type', 'button');
    normal_diff.setAttribute('value', 'Normal');
    normal_diff.setAttribute("id", "normal");
    difficulty.appendChild(normal_diff);
    document.body.appendChild(difficulty);
    */




