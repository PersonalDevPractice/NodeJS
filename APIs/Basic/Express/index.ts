import express from 'express';
import bodyparser from 'body-parser';

const app = express();

app.use(bodyparser.json());

app.listen(8080, () => {
    console.log('listening to port 8080');
});

app.get('/', (request, response) => {
    response.send("Hello world");
});

// Implementing a basic promise returning a response to the user
app.get('/addition', (request, response) => {

    const AdditonPromise = new Promise((resolve, reject) => {
        var total = request.query.val1 + request.query.val2;
        console.log(total);
        resolve(total);
    });

    AdditonPromise
    .then(resolve => {
        response.send(`Result is ${resolve}`);
    });

})
