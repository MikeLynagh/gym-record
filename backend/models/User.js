const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			require: true,
			min: 5,
			max: 30,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 6,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
	},
	// automatically create a timestamp when new user added
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
