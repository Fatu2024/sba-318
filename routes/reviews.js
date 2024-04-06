// reviewsRouter.js
const express = require('express');
const router = express.Router();

const reviews = require('../data/reviews');
// GET all reviews
router.get('/', (req, res) => {
    res.json(reviews);
});

module.exports = router;
