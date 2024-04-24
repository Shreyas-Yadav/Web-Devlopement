const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static(path.join(__dirname, "public/JS")));


app.get("/home", (req, res) => {
    let { link } = req.query;
    console.log(req.query);
    res.render('home.ejs', { link });
})

app.listen(port, () => {
    console.log(`Server is listing on port ${port}`);
})