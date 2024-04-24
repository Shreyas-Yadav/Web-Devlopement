const express = require('express');
const path = require('path');
const methodoverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
const port = 8080;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodoverride('_method'))
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


let posts = [
    {
        username: 'apna collage',
        content: 'I love coding',
        id: uuidv4(),
    },
    {
        username: 'Shreyas Yadav',
        content: 'Be the best Beast',
        id: uuidv4(),
    },
    {
        username: 'Shree Yadav',
        content: 'Live like a legend',
        id: uuidv4(),
    },
];



app.get('/posts', (req, res) => {
    // res.send('server is working');
    res.render('index.ejs', { posts });
});


app.get('/posts/new', (req, res) => {
    res.render('newPost.ejs');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render('details.ejs', { post });
    }
    else {
        res.render('error.ejs');
    }
});

app.get('/posts/edit/:id', (req, res) => {

    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render('editPost.ejs', { post });
    }
    else {
        res.render('error.ejs');

    }

});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ username, content, id });
    res.redirect('/posts');
    // res.render('index.ejs', { posts });
});

app.patch('/posts/edit/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    let post = posts.find((p) => p.id === id);
    if (post) {
        post.content = newContent;
        res.redirect('/posts');
    }
    else {
        res.render('error.ejs');
    }
});

app.delete('/posts/delete/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    // console.log(posts);
    res.redirect('/posts');

});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})