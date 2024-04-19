const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');

let port = 8080;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
    let { username, password } = req.query;
    res.render('home.ejs', { username });
})

app.post("/home", (req, res) => {
    let { username, password } = req.body;
    console.log(req.body);
    res.render('home.ejs', { username });
})


app.listen(port, () => {
    console.log(`Server listing on port ${port}`);
});