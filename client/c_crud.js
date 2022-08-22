//calls with fetch to the server will be made here

/*

async function saveTestScore(name, score){
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

async function getTopScores(){
    const response = await fetch(
        `/highestTestScores`, {
        method: 'GET',
    });
    const data = await response.json();
}

*/