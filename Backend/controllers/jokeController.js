const Joke = require('../models/joke');
const mongoose = require('mongoose');

const createJoke = async (req, res) => {
    const joke = new Joke({
        content: req.body.content
    });

    try {
        const savedJoke = await joke.save();
        if (savedJoke) {
            res.status(201).json({
                message: 'Joke created successfully',
                result: joke
            });
        }
    } catch (err) {
        res.json({ message: err });
    }
}

const getJokes = async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.status(200).json({
            message: 'Jokes fetched successfully',
            result: jokes
        
        });
    } catch (err) {
        res.json({ message: err });
    }
}

const updateJokeLike = async (req, res) => {
    try {
        const joke = await Joke.findById(req.params.jokeId);
        joke.like += 1;
        const updatedJoke = await joke.save();
        res.status(200).json({
            message: 'Joke updated successfully',
            result: updatedJoke
        });
    } catch (err) {
        res.json({ message: err });
    }
}

const updateJokedisLike = async (req, res) => {
    try {
        const joke = await Joke.findById(req.params.jokeId);
        joke.dislike += 1;
        const updatedJoke = await joke.save();
        res.status(200).json({
            message: 'Joke updated successfully',
            result: updatedJoke
        });
    } catch (err) {
        res.json({ message: err });
    }
}

const deleteJoke = async (req, res) => {
    try {
        const removedJoke = await Joke.deleteOne({ _id: req.params.jokeId });
        res.status(200).json({
            message: 'Joke deleted successfully',
            result: removedJoke
        });
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports = {
    createJoke,
    getJokes,
    updateJokeLike,
    updateJokedisLike,
    deleteJoke
};