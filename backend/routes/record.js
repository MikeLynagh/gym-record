const express = require('express');
// router will be added as middleware. It will deal with requests start with /record
const recordRoutes = express.Router();

// helps to connect to database
const dbo = require('../db/conn');

// converts id from string to ObjectId for the _id
const ObjectId = require('mongodb').ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route('/record').get(function (req, res) {
	let db_connect = dbo.getDb('workouts');
	db_connect
		.collection('records')
		.find({})
		.toArray(function (err, result) {
			if (err) throw err;
			res.json(result);
		});
});

// This section will help you get a single record by id
recordRoutes.route('/record/:id').get(function (req, res) {
	let db_connect = dbo.getDb();
	let myquery = { _id: ObjectId(req.params.id) };
	db_connect.collection('records').findOne(myquery, function (err, result) {
		if (err) throw err;
		res.json(result);
	});
});

// This section will help you create a new record.
recordRoutes.route('/record/add').post(function (req, response) {
	let db_connect = dbo.getDb();
	let myobj = {
		date: req.body.date,
		exercise: req.body.exercise,
		weight: req.body.weight,
		sets1: req.body.sets1,
		sets2: req.body.sets2,
		sets3: req.body.sets3,
		sets4: req.body.sets4,
		sets5: req.body.sets5,
		exercise1: req.body.exercise1,
		weight1: req.body.weight1,
		sets6: req.body.sets6,
		sets7: req.body.sets7,
		sets8: req.body.sets8,
		sets9: req.body.sets9,
		sets10: req.body.sets10,
		exercise2: req.body.exercise2,
		weight2: req.body.weight2,
		sets11: req.body.sets11,
		sets12: req.body.sets12,
		sets13: req.body.sets13,
		sets14: req.body.sets14,
		sets15: req.body.sets15,
	};
	db_connect.collection('records').insertOne(myobj, function (err, res) {
		if (err) throw err;
		response.json(res);
	});
});

// This section will help you update a record by id.
recordRoutes.route('/update/:id').post(function (req, response) {
	let db_connect = dbo.getDb();
	let myquery = { _id: ObjectId(req.params.id) };
	let newvalues = {
		$set: {
			name: req.body.name,
			position: req.body.position,
			level: req.body.level,
		},
	};
	db_connect
		.collection('records')
		.updateOne(myquery, newvalues, function (err, res) {
			if (err) throw err;
			console.log('1 document updated');
			response.json(res);
		});
});

// This section will help you delete a record
recordRoutes.route('/:id').delete((req, response) => {
	let db_connect = dbo.getDb();
	let myquery = { _id: ObjectId(req.params.id) };
	db_connect.collection('records').deleteOne(myquery, function (err, obj) {
		if (err) throw err;
		console.log('1 document deleted');
		response.json(obj);
	});
});

module.exports = recordRoutes;
