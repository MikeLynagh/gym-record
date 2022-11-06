const router = require('express').Router();
const User = require('../models/User');

// create new user

router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
	});
	// save user and return response
	try {
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// LOGIN
router.post('/login', async (req, res) => {
	try {
		// find one email address entered in login
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(404).send('user not found');

		// check to validate password
		const validPassword = await User.findOne({ password: req.body.password });
		!validPassword && res.status(404).send('wrong password');
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
