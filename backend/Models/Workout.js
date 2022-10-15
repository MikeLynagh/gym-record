const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let workoutSchema = new Schema(
	{
		exercise: {
			type: String,
		},
	},
	{
		collection: 'workouts',
	}
);

module.exports = mongoose.model(' Workout', workoutSchema);
