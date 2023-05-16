const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('signup')
})

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('login')
})

app.listen(port, () => {
    console.log(`this is on localhost:${port}/signup`)
})