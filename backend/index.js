// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const helmet = require('helmet');
// const morgan = require('morgan');
// // path to router / users
// const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users');
// const PostWorkoutRoute = require('./routes/postworkouts');

// dotenv.config();
// // initial connection to MongoDB
// mongoose
// 	.connect(process.env.MONGO_URL, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => console.log('Database connected'))
// 	.catch((err) => console.log(err));

// // middleware
// app.use(express.json());
// app.use(helmet());
// app.use(morgan('common'));
// app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
// app.use('/api/posts', PostWorkoutRoute);

// app.get('/', (req, res) => {
// 	res.send('Welcome to homepage');
// });

// app.get('/users', (req, res) => {
// 	res.send('Welcome to users page');
// });

// app.listen(8800, () => {
// 	console.log('backend server is running ');
// });
