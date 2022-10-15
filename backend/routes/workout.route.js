let mongoose = require('mongoose'),
	express = require('express'),
	router = express.Router();

// workout Modal
let workoutSchema = require('../models/Workout');

//create workout
router.route('/create-workout').post((req, res, next) => {
	workoutSchema.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			console.log(data);
			res.json(data);
		}
	});
});

// read workout

router.route('/').get((req, res) => {
	workoutSchema.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// get single workout
router.route('/edit-workout/:id').get((req, res) => {
	workoutSchema.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// update workout

router.route('/update-workout/:id').put((req, res, next) => {
	workoutSchema.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body,
		},
		(error, data) => {
			if (error) {
				return next(error);
				console.log(error);
			} else {
				res.json(data);
				console.log('Workout updated successfully !');
			}
		}
	);
});

// delete workout

router.route('/delete-workout/:id').delete((req, res, next) => {
	workoutSchema.findByIdAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data,
			});
		}
	});
});
module.exports = router;
