/** @format */

const express = require('express');
const transactions = express.Router();

const transactionsData = require('../models/transactions.js');
const { validateURL } = require('../models/validations.js');

// INDEX ROUTE
transactions.get('/', (req, res) => {
	if (transactionsData) {
		res.json(transactionsData);
	} else {
		res.redirect('/*');
	}
});

// SHOW ROUTE
transactions.get('/:arrayIndex', (req, res) => {
	console.log(req.params);
	const { arrayIndex } = req.params;
	if (transactionsData[arrayIndex]) {
		res.json(transactionsData[arrayIndex]);
	} else {
		res.redirect('/*');
	}
});

// CREATE ROUTE
transactions.post('/', validateURL, (req, res) => {
	transactionsData.push(req.body);
	res.json(transactionsData[transactionsData.length - 1]);
});

// DESTROY ROUTE
transactions.delete('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;
	if (transactionsData[arrayIndex]) {
		const deletedTransaction = transactionsData.splice(arrayIndex, 1);
		res.status(200).json(deletedTransaction);
	} else {
		res.redirect('/*');
	}
});

// UPDATE ROUTE
transactions.put('/:arrayIndex', (req, res) => {
	const { arrayIndex } = req.params;
	if (transactionsData[arrayIndex]) {
		transactionsData[arrayIndex] = req.body;
		res.status(200).json(transactionsData[arrayIndex]);
	} else {
		res.redirect('/*');
	}
});

module.exports = transactions;
