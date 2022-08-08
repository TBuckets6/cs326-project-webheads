import { hardLevelCoding, normalLevelCoding } from "./bushey_questions_answers.js";

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

function clearState(){
    window.localStorage.clear();
}

function addPre(){
    return document.createElement('pre');
}

function displayQuiz(quiz){
    let quizDisplay = document.createElement('div');
    quizDisplay.setAttribute('id', 'quizDisplay');
    //for(let i = 0; i < )

    let q1 = document.createTextNode(quiz[0].question1);

    for(let i = 0; i < 4; i++){
        let choice = document.createElement('input');
        let choiceTxt = document.createElement('label');
        choice.setAttribute('type', 'radio');
        choice.setAttribute('id', 'choice');
        //choiceTxt.textContent = quiz[0].answers1[0][property[0]];
        choiceTxt.textContent = quiz[0].answers1[i][i];
        console.log(quiz[0].answers1[0][i])
        choiceTxt.setAttribute('for', choice);
        quizDisplay.appendChild(addPre());
        quizDisplay.appendChild(choice)
        quizDisplay.appendChild(choiceTxt)
    }
    /*
    let choiceA = document.createElement('input');
    let aText = document.createElement('label');
    const pre = document.createElement('pre');
    choiceA.setAttribute('type', 'radio')
    choiceA.setAttribute('id', 'choiceA')
    aText.textContent =  quiz[0].answers1[0].a

    aText.setAttribute('for', 'choiceA')
    quizDisplay.appendChild(q1)
    quizDisplay.appendChild(pre)
    quizDisplay.appendChild(choiceA);
    quizDisplay.appendChild(aText)
    //quizDisplay.innerText = normalLevelCoding[0].question1;

    */
    document.body.appendChild(quizDisplay);
    //return quiz;
}

//saveState();
/*

function displayQuiz(quiz){
    let quizDisplay = document.createElement('div');
    quizDisplay.setAttribute('id', 'quizDisplay');
    //for(let i = 0; i < )
    let q1 = document.createTextNode(quiz[0].question1);
    let choiceA = document.createElement('input');
    let aText = document.createElement('label');
    const pre = document.createElement('pre');
    choiceA.setAttribute('type', 'radio')
    choiceA.setAttribute('id', 'choiceA')
    aText.textContent =  quiz[0].answers1[0].a

    aText.setAttribute('for', 'choiceA')
    quizDisplay.appendChild(q1)
    quizDisplay.appendChild(pre)
    quizDisplay.appendChild(choiceA);
    quizDisplay.appendChild(aText)
    //quizDisplay.innerText = normalLevelCoding[0].question1;


    document.body.appendChild(quizDisplay);
    //return quiz;
}

*/
//displayQuiz(normalLevelCoding);

//When called, this fucnction will allow each button to be clicked.
function enableButtons(){
    difficulty.removeAttribute("disabled");
    timeLimit.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
}


codingPic.addEventListener("click", () => {
    enableButtons();
    startBtn.classList.add("codingPic");
});


mathPic.addEventListener("click", () => {
    enableButtons();
    startBtn.classList.add("mathPic");
});


bballPic.addEventListener("click", () => {
    enableButtons();
    startBtn.classList.add("bballPic");
});


startBtn.addEventListener("click", () => {
    initDisplay.style.display = "none";//hide the 'start ment' display

    if(startBtn.classList.contains("codingPic")){
        if(difficulty.value === "normal"){
            displayQuiz(normalLevelCoding);
        }
        else{
            displayQuiz(hardLevelCoding);
        }

    }
    else if(startBtn.classList.contains("mathPic")){

    }
    else if(startBtn.classList.contains("bballPic")){

    }

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

