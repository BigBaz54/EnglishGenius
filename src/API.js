import express from 'express';

// Data
import sportsData from './question/sports.json' assert { type: 'json' };
import foodData from './question/food.json' assert { type: 'json' };
import animalsData from './question/animals.json' assert { type: 'json' };
import ITData from './question/IT.json' assert { type: 'json' };

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});
app.get('/sports', (req, res) => {
    res.json(sportsData);
});
app.get('/food', (req, res) => {
    res.json(foodData);
});
app.get('/animals', (req, res) => {
    res.json(animalsData);
});
app.get('/IT', (req, res) => {
    res.json(ITData);
});
app.listen(3000, () => {
    console.log('API Server started on port 3000');
});