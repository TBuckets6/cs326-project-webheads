//Front-end CRUD operations are stored in this file

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
    return data;
}

async function c_deleteTopScores(){
    const response = await fetch(
        `/highestTestScores`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
    });
}

export { c_saveTestScore, c_getTopScores, c_deleteTopScores };