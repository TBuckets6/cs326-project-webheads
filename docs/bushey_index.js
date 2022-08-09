import { hardLevelCoding, normalLevelCoding } from "./bushey_questions_answers.js";

const codingPic = document.getElementById('codingPic');
const mathPic = document.getElementById('mathPic');
const bballPic = document.getElementById('bballPic')
const topics = document.getElementById('topics');
const difficulty = document.getElementById('difficulty');
const timeLimit = document.getElementById('timeLimit');
const startBtn = document.getElementById('start');
const initDisplay = document.getElementById('initDisplay');
const submitBtn = document.createElement('input');

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

/*
function getAnswers(quiz){
    let answers = []
    for(let i = 0; i < 3; i++){
        answers.push(quiz[i].correct)
    }
    return answers;
}
*/

//const ans = getAnswers(quiz);

function displayQuiz(quiz){
    let answers = [];
    let quizDisplay = document.createElement('div');
    let correctAnswer = 0;
    quizDisplay.setAttribute('id', 'quizDisplay');
    //for(let i = 0; i < )

    
    for(const obj in quiz){
   
    let index0 = Number(obj) + 1;
    let y = 'question' + index0
    let q = document.createTextNode(quiz[obj][y]);
    quizDisplay.appendChild(addPre())
    quizDisplay.appendChild(q)
    answers.push(quiz[obj].correct)

    for(let i = 0; i < 4; i++){
        /*
        if(quiz[obj.correct === true]){
            correctAnswer = obj;
            answers.push(correctAnswer);
        }
        */
        
        let index = Number(obj) + 1
        let x = 'answers' + index;
        let choice = document.createElement('input');
        let choiceTxt = document.createElement('label');
        choice.setAttribute('type', 'radio');
         
        choice.setAttribute('id', 'choice' + String(obj) + String(i));
        //console.log('choice' + String(obj) + String(i))
        choice.setAttribute('name', 'choice' + String(obj))
        //choiceTxt.textContent = quiz[0].answers1[0][property[0]];
        choiceTxt.textContent = quiz[obj][x][i][i];
        //console.log(choice)
        choiceTxt.setAttribute('for', choice);
        quizDisplay.appendChild(addPre());
        quizDisplay.appendChild(choice)
        quizDisplay.appendChild(choiceTxt)
        
    }

    }
    quizDisplay.appendChild(addPre())
    //const finishBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('value', 'Submit')
    quizDisplay.appendChild(submitBtn)
    document.body.appendChild(quizDisplay);
    //return quiz;
    //console.log(answers)
    return answers;
}
//console.log(quizDisplay)
//const ans = quizDisplay()


submitBtn.addEventListener("click", () =>{
    document.getElementById('quizDisplay').style.display = "none";
    calculateScore();
    let resultsDisplay = document.createElement('div');
    let feedback = document.createTextNode('You scored ' + String(calculateScore()) + ' out of 3 points')
    resultsDisplay.appendChild(feedback);
    document.body.appendChild(resultsDisplay);
});



function calculateScore(){//this function will return the score
    let answers = []
    if(startBtn.classList.contains("codingPic")){
        if(difficulty.value === "normal"){
            answers = [0,2,1]


        }
        else{
            displayQuiz(hardLevelCoding);
        }

    }
    let checked = []
    let zip = '';
    let score = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4; j++){
            let index = Number(i) + 1
            let x = 'answers' + index;
            if(document.getElementById('choice' + String(i) + String(j)).checked === true && j === answers[i]/*&&  j === */)  {
                score = score + 1;
            }
            
            //if(document.getElementById('choice' + String(i) + String(j)).checked === true && q[i.correct] === /*q[i][x][j][j]*/){
              //  console.log('hi')
            //} 
        }
    }
   
    /*
    for(let h = 0; h < 3; h++){
        for(let i = 0; i < 4; i ++){
            //console.log(typeof(choice01))
            //let zip = JSON.parse('choice' + String(h) + String(i))
            //console.log(JSON.parse(zip))
            //if()
            //console.log('hi')
            //let zz ==  
            //q[h][answers + h + 1][i][i + 1] //to get the 'correct' property?
            //if(q[h]){

            //}
            let index000 = h+1
            let zz = 'answers' + String(index000);
            if(document.getElementById('choice' + String(h) + String(i)).checked === true && q[]){
                console.log('hi')

            } 
        }
        
            
    }
    */
    /*
    for(let i = 0; i < 4; i++){
        
    }
    */
    /*
    if(choice01.checked === true){
        console.log('hi')
    }
    */
   
   return score;
}

/*
function displayQuiz(quiz){
    let quizDisplay = document.createElement('div');
    quizDisplay.setAttribute('id', 'quizDisplay');
    //for(let i = 0; i < )

    let q1 = document.createTextNode(quiz[0].question1);
    
    for(let i = 0; i < 4; i++){
        let choice = document.createElement('input');
        let choiceTxt = document.createElement('label');
        choice.setAttribute('type', 'radio');
        choice.setAttribute('id', 'choice' + String(i));
        choice.setAttribute('name', 'choice')
        //choiceTxt.textContent = quiz[0].answers1[0][property[0]];
        choiceTxt.textContent = quiz[0].answers1[i][i];
        console.log(choice)
        choiceTxt.setAttribute('for', choice);
        quizDisplay.appendChild(addPre());
        quizDisplay.appendChild(choice)
        quizDisplay.appendChild(choiceTxt)
    }
    
    
    document.body.appendChild(quizDisplay);
    //return quiz;
}

*/
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

