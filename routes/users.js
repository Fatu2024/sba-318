const express = require('express');
const router = express.Router();

const users = require('../data/users');

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET one user by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.json(user);
    }
});

// PATCH one user by ID
router.patch('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        res.status(404).send('User not found');
    } else {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.json(users[userIndex]);
    }
});

// PUT one user by ID
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        res.status(404).send('User not found');
    } else {
        users[userIndex] = req.body;
        res.json(users[userIndex]);
    }
});

// DELETE one user by ID
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        res.status(404).send('User not found');
    } else {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser[0]);
    }
});

module.exports = router;
