import express from 'express';

// Data
import easyData from './question/easy.json' assert { type: 'json' };
import mediumData from './question/medium.json' assert { type: 'json' };
import hardData from './question/hard.json' assert { type: 'json' };

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API is running...' });
});
app.get('/easy', (req, res) => {
    res.json(easyData);
});
app.get('/medium', (req, res) => {
    res.json(mediumData);
});
app.get('/hard', (req, res) => {
    res.json(hardData);
});
app.listen(3000, () => {
    console.log('API Server started on port 3000');
});