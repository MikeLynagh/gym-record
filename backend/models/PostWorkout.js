const mongoose = require('mongoose');

const PostWorkoutSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
		},
		exercise: {
			type: String,
		},
		weight: {
			type: Number,
		},
		exercise1: {
			type: String,
		},
		weight1: {
			type: Number,
		},
		exercise2: {
			type: String,
		},
		weight2: {
			type: Number,
		},
		sets1: {
			type: Number,
		},
		sets2: {
			type: Number,
		},
		sets3: {
			type: Number,
		},
		sets4: {
			type: Number,
		},
		sets5: {
			type: Number,
		},
		sets6: {
			type: Number,
		},
		sets7: {
			type: Number,
		},
		sets8: {
			type: Number,
		},
		sets9: {
			type: Number,
		},
		sets10: {
			type: Number,
		},
		sets11: {
			type: Number,
		},
		sets12: {
			type: Number,
		},
		sets13: {
			type: Number,
		},
		sets14: {
			type: Number,
		},
		sets15: {
			type: Number,
		},
	},
	// automatically create a timestamp when new user added
	{ timestamps: true }
);

module.exports = mongoose.model('PostWorkout', PostWorkoutSchema);
