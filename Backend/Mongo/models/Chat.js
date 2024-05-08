const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLengtn: 50
    },
    createdAt: {
        type: Date
    },
});


const Chat = new mongoose.model("Chat", chatSchema);


module.exports = Chat;