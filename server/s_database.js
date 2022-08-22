import { readFile, writeFile } from 'fs/promises';
import 'dotenv/config'
import pg from 'pg';

const { Pool } = pg;

class Database {
    constructor(){
        this.path = 'scores.json';
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
        try{
            let rootArr = await readFile(this.path, 'utf-8');
            rootArr = JSON.parse(rootArr);
			rootArr.sort((first, second) => second.score - first.score);
            if(rootArr.length > 10){
                rootArr.spilce(10);
            }
            return rootArr;
        }
        catch{
            console.log('error reading file');
        }
    }

    async deleteTopScores(){//DELETE
        try{
            let rootArr = await readFile(this.path, 'utf-8');
            rootArr = JSON.parse(rootArr);
            rootArr = [];
            await writeFile(this.path, JSON.stringify(rootArr));
        }
        catch{
            console.log('error reading file');
        }
    }
    
}

//////// The commented-out class below was meant to replace the file-based persistence
//////// which the class above uses. But I haven't been able to get it to work with 
//////// Heroku. I was able to go through all the steps in Lesson 18 and
//////// the app loads on the heroku site for the first time but the functionality
//////// doesn't work. 
/*
class Database {
    constructor(){

    }

    async connect(){
        this.pool = new Pool({
            connectionString: PORT,
            ssl: { rejectUnauthorized: false },
        });

        this.client = await this.pool.connect();

        await this.init();
    }

    async init(){
        const queryScores = `
        create table if not exists topScores (
          name varchar(30) primary key,
          score integer
        );
        
        insert into 
          topScores(name, score) 
        values 
          ('LeBron', 3),
      `;
      const wordRes = await this.client.query(queryScores);
    }

    async close(){
        this.client.release();
        await this.pool.end();
    }

    async getTopScores() {
        const queryScores =
            'SELECT * FROM topScore';
        const res = await this.client.query(queryScores);
        return res.rows;
    }

    //CREATE a score in the db
    async saveTestScore(name, score){
        const queryScores = 
          'INSERT INTO topScores (name, score) VALUES ($1, $2) RETURNING *';
        const res = await this.client.query(queryScores, [name, score]);
        return res.rows;
    }

    async deleteTopScores(){
        const queryScores = 
        'DELETE * FROM topScore';
        const res = await this.client.query(queryScores);
        return res.rows;
    }
}
*/

const database = new Database();

export { database };