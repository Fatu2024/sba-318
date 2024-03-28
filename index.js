const express = require('express');
const app = express();
const PORT = 3000;

let learners = [
    { id: 1, name: 'Fatu', avg: 93 },
    { id: 2, name: 'Jaya', avg: 95 },
    { id: 3, name: 'Tori', avg: 92 }
]

app.use(express.json());

//get all learners
app.get('/learner/', (req,res) => {
    res.json(learners);
});

//get just one learner
app.get('/learner/:id', (req, res) => {
    const learnerId = parseInt(req.params.id);
    const learner = learners.find((learner) => learner.id === learnerId);
    if(!learner) {
        res.send('learner not found').status(404);
    } else {
        res.json(learner);
    }
});










app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})