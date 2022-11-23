const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));
// connect to driver
const dbo = require('./db/conn');

app.listen(port, () => {
	// check if connection to database when server starts
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});

// cors
// installs a Node.js package to allow cross origin resource sharing

//dotenv
// this is installed to hide passwords
