import express from 'express';
import logger from 'morgan';
import { database } from './s_database.js';

//create express app and set the port
const app = express();
const port = process.env.PORT || 3000;

//setup middleware for app
app.use(express.json());//only parses json
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));//provides logging info to the console
app.use('/', express.static('client')); //This lets the HTTP server statically serves the client code

//backend CRUD operations here
app.post('/testScore', async (request, response) => {
    const reqBod = request.query;
    await database.saveTestScore(reqBod.name, reqBod.score);
    response.status(200);
    response.json({ "status": "success" }); 
});

app.get('/highestTestScores', async (request, response) => {
    const topScores = await database.getTopScores();
    response.status(200);
    response.json(topScores);
});

app.delete('/highestTestScores', async (request, response) => {
    await database.deleteTopScores();
    response.send("Top scores deleted");
})


app.all('*', async (request, response) => {//for any other paths that dont match any of the above
    response.status(404).send(`Not found: ${request.path}`);//display a 404 message of not found
});


app.listen(port, () => {//this is where the server is initiated
    console.log(`Server started on http://localhost:${port}`);
});