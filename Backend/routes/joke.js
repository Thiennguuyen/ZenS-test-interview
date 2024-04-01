const express = require('express');
const router = express.Router();

const jokeController = require('../controllers/jokeController');

router.post('/create', jokeController.createJoke);
router.get('/', jokeController.getJokes);
router.patch('/:jokeId/like', jokeController.updateJokeLike);
router.patch('/:jokeId/dislike', jokeController.updateJokedisLike);
router.delete('/:jokeId', jokeController.deleteJoke);

module.exports = router;