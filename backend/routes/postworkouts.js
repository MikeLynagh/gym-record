const router = require('express').Router();
const Post = require('../models/PostWorkout');
const User = require('../models/User');

// create a workout

router.post('/', async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});
// update a workout

router.put('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.updateOne({ $set: req.body });
			res.status(200).json('the post has been updated');
		} else {
			res.status(403).json('you can only update your workouts');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// delete a workout
router.delete('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.deleteOne();
			res.status(200).json('the post has been deleted');
		} else {
			res.status(403).json('you can only delete your own workouts');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//get all workouts

router.get('/workouts/all', async (req, res) => {
	try {
		// get the current id of this user
		const currentUser = await User.findById(req.body.userId);
		// add all workouts by this id to workouts array
		const userWorkouts = await Post.find({ userId: currentUser._id });
		res.json(userWorkouts);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
