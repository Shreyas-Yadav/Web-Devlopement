const { Pool } = require('pg');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { name } = require('ejs');
const { faker } = require('@faker-js/faker')



const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));




const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "CollegeDB",
});



app.listen(port, () => {
    console.log('listing on port ', port);
});



app.get('/', async (req, res) => {

    let query = {
        name: 'get count of usertable',
        text: 'select count(id) from usertable'
    };
    const client = await pool.connect();
    try {
        let num = await client.query(query);
        let cnt = num.rows[0].count;
        res.render('index.ejs', { cnt });
    }
    catch (e) {
        res.render('error.ejs', { e });
    }

    await client.release();

});


app.get('/user', async (req, res) => {
    let query = {
        name: 'get all user data',
        text: 'select * from usertable order by username'
    };

    const client = await pool.connect();
    try {
        let num = await client.query(query);
        let result = num.rows;
        res.render('users.ejs', { result });
    }
    catch (e) {
        res.render('error.ejs', { e });
    }
    await client.release();

});



app.get('/user/update/:id', async (req, res) => {
    let { id } = req.params;
    let query = {
        name: 'get user',
        text: 'select * from usertable where ID = ($1)',
        values: [id]
    }
    const client = await pool.connect();
    try {
        let num = await client.query(query);
        let data = num.rows[0];
        res.render('update.ejs', { data });
    }
    catch (e) {
        res.render('error.ejs', { e });
    }

    await client.release();
});


app.patch('/user/update/:id', async (req, res) => {
    let { id, password, email } = req.body;
    let query = {
        name: 'update user',
        text: 'update usertable set password = $1, email = $2 where id = $3',
        values: [password, email, id]
    }

    const client = await pool.connect();
    try {
        let num = await client.query(query);
        res.redirect('/user');
    }
    catch (e) {
        res.render('error.ejs', { e });
    }
    await client.release();

});


app.delete('/user/delete/:id', async (req, res) => {
    let { id } = req.params;
    let query = {
        name: 'delete user',
        text: 'delete from usertable where id = $1',
        values: [id]
    }

    const client = await pool.connect();
    try {
        let num = await client.query(query);
        res.redirect('/user');
    }
    catch (e) {
        res.render('error.ejs', { e });
    }
    await client.release();

});



app.get('/user/add', (req, res) => {
    res.render('add.ejs');
});



app.post('/user/add', async (req, res) => {
    let id = faker.string.uuid();
    let { username, password, email } = req.body;
    let query = {
        name: 'add user',
        text: 'insert into usertable (id,username,email,password) values($1,$2,$3,$4)',
        values: [id, username, email, password]
    }

    const client = await pool.connect();
    try {
        let num = await client.query(query);
        console.log(num);
        res.redirect('/user');
    }
    catch (e) {
        res.render('error.ejs', { e });
    }
    await client.release();
});