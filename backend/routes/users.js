const router = require('express').Router();
const User = require('../models/User');

// update user
router.put('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			});
			res.status(200).json('Account has been updated');
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json('you cannot update this account');
	}
});

//delete a user

router.delete('/:id', async (req, res) => {
	if (req.body.userId === req.params.id) {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json('Account has been deleted');
		} catch (err) {}
	} else {
		return res.status(403).json("You don't have access to delete this account");
	}
});

module.exports = router;
