import { readFile, writeFile } from 'fs/promises';

class Database {
    constructor(){
        this.path = scores.json;
    }

    async saveTestScore(name, score){ //CREATE

        const scoreObj = {name: name, score: score};

        try{
            let rootArr = await readFile(this.path, 'utf-8');
            rootArr = JSON.parse(rootArr);
            rootArr.push(scoreObj);
            await writeFile(this.path, JSON.stringify(rootArr), 'utf-8');
        }
        catch{
            let rootArr = [scoreObj];
            await writeFile(this.path, JSON.stringify(rootArr), 'utf-8');
        }
        
    }

    async getTopScores(){//READ

    }


}

const database = new Database();

export { database };