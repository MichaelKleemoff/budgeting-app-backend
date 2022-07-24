/** @format */

// DEPENDENCIES
const express = require('express');
const cors = require('cors');

// CONFIGURATION
const app = express();

// MIDDLEWARE to enable CORS on our server
// CORS is our doorman for our API
app.use(cors());

// MIDDLEWARE that turns our JSON into usable JS
app.use(express.json());

const transactionsController = require('./controllers/transactionsController.js');

// ROUTES
app.get('/', (req, res) => {
	res.send(`Welcome to the Budgeting App 💰`);
});

// app.use is a function that allows express to use code in the process of servicing a request. In this case, once we get the route `/transactions`, express will use the transactionsController.
app.use('/transactions', transactionsController);

// ERRORS
app.get('*', (req, res) => {
	res.status(404).json({ error: 'Page not found' });
});

// EXPORT
module.exports = app;
