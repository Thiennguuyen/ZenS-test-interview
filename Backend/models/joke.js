const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    like : {
        type: Number,
        default: 0
    },
    dislike : {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Joke', jokeSchema);