const express = require('express');
const router = express.Router();

const posts = require('../data/posts');

//get all posts
router.get('/', (req,res) => {
    res.json(posts);
});

module.exports = router;


