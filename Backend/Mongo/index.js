const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/Chat.js');
var methodOverride = require('method-override')
const { create } = require('domain');
const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
    .then(() => { console.log('connection success') })
    .catch((err) => console.log(err));



app.listen(port, () => {
    console.log('Server Started on ', port);
})


app.get('/', (req, res) => {
    res.send('Root is working');
});

app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    res.render('chats.ejs', { chats });
});

app.get('/chats/new', (req, res) => {
    // res.send("New chat page form");
    res.render('new.ejs');
});


// create route
app.post('/chats/new', (req, res) => {
    let { from, msg, to } = req.body;
    let newChat = new Chat({
        from, msg, to,
        createdAt: new Date()
    });
    newChat.save()
        .then(() => {
            console.log('Record saved success');
        })
        .catch((err) => {
            console.log(err);
        })

    res.redirect('/chats');
});



app.get('/chats/edit/:id', async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render('edit.ejs', { chat });
});

app.put('/chats/edit/:id', async (req, res) => {
    let { id, msg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect('/chats');
});


app.delete('/chats/delete/:id', async (req, res) => {
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect('/chats');
});