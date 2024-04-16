const exp = require("express");
const app = exp();


let port = 3000;

app.get('/', (req, res) => {
    res.sendFile(`D:/Web Devlopement/Backend/Express_JS/test.html`);
})

app.post('/', (req, res) => {
    res.send('This is post req at root');
})

app.listen(port, () => {
    console.log(`App listing form ${port}`);
})