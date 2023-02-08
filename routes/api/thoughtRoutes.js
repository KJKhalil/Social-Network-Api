const router = require('express').Router();

const {
    getAllThoughts,
    getAThought,
    updateThought,
    createThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controller/thoughtController');

router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
.route('/:thoughtId')
.get(getAThought)
.put(updateThought)
.delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(createReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;