const mongoose = require('mongoose');
const chat = require('./models/Chat.js');
const { faker } = require('@faker-js/faker');

const getRandomUser = () => {
    const from = faker.person.firstName();
    const to = faker.person.firstName();
    const msg = faker.lorem.sentence();
    const date = new Date();
    return { from, to, msg, date };
}


const users = [];

for (let i = 0; i < 10; i++) {
    users.push(getRandomUser());
}



mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
    .then(() => {
        console.log('Connection created...');
        chat.insertMany(users);
        console.log('Users added successfully');
    })
    .catch((err) => console.log(err));





