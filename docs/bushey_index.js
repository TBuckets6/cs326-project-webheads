const codingPic = document.getElementById('codingPic');
const mathPic = document.getElementById('mathPic');
const bballPic = document.getElementById('bballPic')
const topics = document.getElementById('topics');
const difficulty = document.getElementById('difficulty');
const timeLimit = document.getElementById('timeLimit');
const startBtn = document.getElementById('start');

codingPic.addEventListener("click", () => {
    difficulty.removeAttribute("disabled");
    timeLimit.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
});

mathPic.addEventListener("click", () => {
    difficulty.removeAttribute("disabled");
    timeLimit.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
    
    
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
});

bballPic.addEventListener("click", () => {
    difficulty.removeAttribute("disabled");
    timeLimit.removeAttribute("disabled");
    startBtn.removeAttribute("disabled");
});



