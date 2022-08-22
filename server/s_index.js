import express from 'express';

//create express app and set the port
const app = express();
const port = 3000 || process.env.PORT;

//setup middleware for app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/client', express.static('client'));

app.post('testScore', async (request, response) => {
    const reqBod = request.query;
    //await 
})
