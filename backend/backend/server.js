import express from 'express';

const app = express();

const port = process.env.PORT || 3002;

app.get('/', function (req, res) {
    res.send("hello world ");

})

app.get('/contant', function (req, res) {
    res.send("contant");

})

app.get('/api/jokes', function (req, res) {
    const jokes = [
        {
            id: 1,
            title: ' A joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: "sencond jokes",
            content: "this is the second jokes"

        },
        {
            id: 3,
            title: "third jokes",
            content: "this is t he third jokes"

        },
        {
            id: 4,
            title: " forth jokes",
            content: " this is the jokes forth "
        },
        {
            id: 5,
            title: 'forth jokes',
            content: 'this is the forth jokes'

        },
        {
            id: 6,
            title: "six jokes",
            content: " this is the jokes six"
        }
    ]

    res.json(jokes);
  


})

app.listen(port, function () {
    console.log(`Server at http://localhost:${port}`)
})