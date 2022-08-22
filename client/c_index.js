import { c_deleteTopScores, c_getTopScores, c_saveTestScore } from "./c_crud.js";
import { hardLevelCoding, normalLevelCoding, normalLevelMath, hardLevelMath, normalLevelBball, hardLevelBball } from "./c_questions_answers.js";

const codingPic = document.getElementById('codingPic');
const mathPic = document.getElementById('mathPic');
const bballPic = document.getElementById('bballPic')
const topics = document.getElementById('topics');
const difficulty = document.getElementById('difficulty');
const timeLimit = document.getElementById('timeLimit');
const startBtn = document.getElementById('start');
const initDisplay = document.getElementById('initDisplay');
const submitBtn = document.createElement('input');
const p_name = document.getElementById('p_name');
const scoreDisplay = document.getElementById('scoreDisplay');
const clearScores = document.getElementById('clear');
//const quizDisplay = document.createElement('')
/*
if(window.localStorage){
    restoreState();
}
*/

await displayTopScores();

function saveState() {
    window.localStorage.setItem('difficulty', JSON.stringify(difficulty.value)); //saves the difficulty as a string ("normal" or "hard").
    window.localStorage.setItem('quizDisplay', JSON.stringify(document.getElementById('quizDisplay')))
}

function restoreState() {
    let diff = window.localStorage.getItem('difficulty');
    initDisplay.style.display = "none";
    document.body.appendChild(window.localStorage.getItem('quizDisplay'));

}

function clearState() {
    window.localStorage.clear();
}

function addPre() {
    return document.createElement('pre');
}

async function displayQuiz(quiz) {
    let answers = [];
    let quizDisplay = document.createElement('div');
    let correctAnswer = 0;
    quizDisplay.setAttribute('id', 'quizDisplay');

    for (const obj in quiz) {

        let index0 = Number(obj) + 1;
        let y = 'question' + index0
        let q = document.createTextNode(quiz[obj][y]);
        quizDisplay.appendChild(addPre())
        quizDisplay.appendChild(q)
        answers.push(quiz[obj].correct)

        for (let i = 0; i < 4; i++) {

            let index = Number(obj) + 1
            let x = 'answers' + index;
            let choice = document.createElement('input');
            let choiceTxt = document.createElement('label');
            choice.setAttribute('type', 'radio');

            choice.setAttribute('id', 'choice' + String(obj) + String(i));
            choice.setAttribute('name', 'choice' + String(obj))
            choiceTxt.textContent = quiz[obj][x][i][i];
            choiceTxt.setAttribute('for', choice);
            quizDisplay.appendChild(addPre());
            quizDisplay.appendChild(choice)
            quizDisplay.appendChild(choiceTxt)

        }

    }
    quizDisplay.appendChild(addPre())
    submitBtn.setAttribute('type', 'button');
    submitBtn.setAttribute('value', 'Submit')
    quizDisplay.appendChild(submitBtn)
    document.body.appendChild(quizDisplay);

    //let topScores = await c_getTopScores();
    //console.log(topScores);
    //console.log('hi')
    //console.log(topScores)
    /*
    let html = '<h1>Top Scores</h1>';
    html += '<table>';
    */

    return answers;
}

async function calculateScore() {//this function will return the score
    let answers = []
    if (startBtn.classList.contains("codingPic")) {
        if (difficulty.value === "normal") {
            answers = [0, 2, 1]


        }
        else {
            answers = [2, 1, 1]
        }

    }
    else if(startBtn.classList.contains("mathPic")){
        if (difficulty.value === "normal") {
            answers = [1, 2, 3]


        }
        else {
            answers = [3, 2, 2]
        }
    }
    else{
        if (difficulty.value === "normal") {
            answers = [0, 2, 0]


        }
        else {
            answers = [2, 2, 2]
        }
    }


    let score = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            let index = Number(i) + 1
            if (document.getElementById('choice' + String(i) + String(j)).checked === true && j === answers[i]) {
                score = score + 1;
            }
        }
    }
    await c_saveTestScore(p_name.value, score); //grab the name and score and store that data in the database  //////////////////////
    return score;
}

//This function will display the scores on the initial UI display of the application
async function displayTopScores(){
    let topScores = await c_getTopScores();
    let html = '<h1>Top Test Scores</h1>'; //declare a variable to store html code
    html += '<table>';//create a table element
    topScores.forEach((score) => {//iterate through each of the score objects in the array
        //crate rows with cells to display the name of the player and their score
        html += `
        <tr>
          <td>${score.name}</td>
          <td>${score.score}</td>
        </tr>
        `;
    });
    html += '</table>';//create the end tag for the table
    
    scoreDisplay.innerHTML = html;//display the newly created html code to the scoreDisplay variable which represents a div element
    
}

//When called, this fucnction will allow each button to be clicked.
function enableButtons() {
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

    if (startBtn.classList.contains("codingPic")) {
        if (difficulty.value === "normal") {
            displayQuiz(normalLevelCoding);
        }
        else {
            displayQuiz(hardLevelCoding);
        }

    }
    else if (startBtn.classList.contains("mathPic")) {
        if (difficulty.value === "normal") {
            displayQuiz(normalLevelMath);
        }
        else {
            displayQuiz(hardLevelMath);
        }


    }
    else if (startBtn.classList.contains("bballPic")) {
        if (difficulty.value === "normal") {
            displayQuiz(normalLevelBball);
        }
        else {
            displayQuiz(hardLevelBball);
        }
    }

}); 


submitBtn.addEventListener("click", async () => {
    document.getElementById('quizDisplay').style.display = "none";
    let resultsDisplay = document.createElement('div');
    let feedback = document.createTextNode('You scored ' + String(await calculateScore()) + ' out of 3 points')
    resultsDisplay.appendChild(feedback);
    document.body.appendChild(resultsDisplay);
});


clearScores.addEventListener("click", async () => {
    await c_deleteTopScores();
    scoreDisplay.innerHTML = '';
    await displayTopScores();
})
