const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));
// get driver connection
const dbo = require('./db/conn');

app.listen(port, () => {
	// perform a database connection when server starts
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});

// let express = require('express');
// let mongoose = require('mongoose');
// let cors = require('cors');
// let bodyParser = require('body-parser');
// // Express Route
// const workoutRoute = require('../backend/routes/workout.route');
// // Connecting mongoDB Database
// mongoose
// 	.connect('mongodb://127.0.0.1:27017/mydatabase')
// 	.then((x) => {
// 		console.log(
// 			`Connected to Mongo! Database name: "${x.connections[0].name}"`
// 		);
// 	})
// 	.catch((err) => {
// 		console.error('Error connecting to mongo', err.reason);
// 	});
// const app = express();
// app.use(bodyParser.json());
// app.use(
// 	bodyParser.urlencoded({
// 		extended: true,
// 	})
// );
// app.use(cors());
// app.use('/workouts', workoutRoute);

// // PORT
// const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
// 	console.log('Connected to port ' + port);
// });
// // 404 Error
// app.use((req, res, next) => {
// 	next(createError(404));
// });
// app.use(function (err, req, res, next) {
// 	console.error(err.message);
// 	if (!err.statusCode) err.statusCode = 500;
// 	res.status(err.statusCode).send(err.message);
// });
