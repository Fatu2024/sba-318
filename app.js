const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (stylesheets, etc.)
app.use(express.static('styles'));

// Logging middleware
app.use((req, res, next) => {
    const time = new Date();
    console.log(`----- 
    ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
    if (Object.keys(req.body).length > 0) {
        console.log("Containing the data: ");
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
});

// Routes for posts, reviews, and users
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');
const usersRouter = require('./routes/users');

app.use('/api/posts', postsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/users', usersRouter);

// View engine setup
app.set('views', './views'); 
app.set('view engine', 'ejs'); 

// Root route
app.get('/', (req, res) => {
    res.render('welcome.page.ejs');
});

//handling form submission
app.post('/submit', (req, res) => {
    const { name, age, gender, program } = req.body;
    console.log('thanks for registering', { name, age, gender, program });
    res.json({ name, age, gender, program });
});


// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "resource not found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
