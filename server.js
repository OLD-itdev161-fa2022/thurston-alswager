import express from 'express';
import connectDatabase from './config/db';

const app = express();

connectDatabase();

//Configure Middleware
app.use(express.join({ extended: false }));

//Endpoints
/**
 * @route GET /
 * @desc Test endpoint
 */
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//Endpoints
/**
 * @route POST api/users
 * @desc Register user
 */
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

//Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));
