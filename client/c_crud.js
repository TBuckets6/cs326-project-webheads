//calls with fetch to the server will be made here

async function c_saveTestScore(name, score){
    const scoreObj = {name: name, score: score};
    let rootArr = [scoreObj];

    const response = await fetch(
        `/testScore?name=${name}&score=${score}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(rootArr)
    });
}

async function c_getTopScores(){
    const response = await fetch(
        `/highestTestScores`, {
        method: 'GET',
    });
    const data = await response.json();
}

export { c_saveTestScore, c_getTopScores }