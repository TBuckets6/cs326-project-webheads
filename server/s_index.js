import express from 'express';
import logger from 'morgan';
import { database } from './s_database.js';

//const express = require('express');
//create express app and set the port
const app = express();
const port = process.env.PORT || 3000;

//setup middleware for app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static('client'));

app.post('/testScore', async (request, response) => {
    const reqBod = request.query;
    await database.saveTestScore(reqBod.name, reqBod.score);
    response.status(200);
    response.json({ "status": "success" }); 
});

app.get('/highestTestScores', async (request, response) =>{
    const topScores = await database.getTopScores();
    response.status(200);
    response.json(topScores);
});


app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});