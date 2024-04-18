const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public/CSS')));
app.use(express.static(path.join(__dirname, 'public/JS')));




// To get path of views folder even if server starts from another directory
// we have to set the path for "views" directory 
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    let data = Math.floor(Math.random() * 6) + 1;
    res.render('home.ejs', { data });
});


app.get('/ig/:username', (req, res) => {
    const { username } = req.params;
    let followers = require('./data.json');
    let data = followers[username];
    if (data) {
        res.render('instagram.ejs', { username, data });
    }
    else {
        res.render('error.ejs');
    }
})

app.listen(port, () => {
    console.log(`listing on por ${port}`);
});

