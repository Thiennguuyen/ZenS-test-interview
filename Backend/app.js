const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/index');
const compression = require('compression');

const cors = require('cors');

app.use(bodyParser.json());
app.use(compression());
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());
router(app);

app.use((error, req, res, next) => {
    res.setHeader('x-content-type-options', 'nosniff');
	if (res.headerSent) {
		return next(error);
	}
	res
		.status(error.code || 500)
		.json({message: error.message || "An unknown error occurred!"});
});

mongoose
    .connect('mongodb+srv://thienph20062001:abc123123abc@cluster0.rufzayr.mongodb.net/jokes?retryWrites=true&w=majority')
    .then(() => {
        app.listen(5000);
        console.log('Connected!');
    })
    .catch(err => {
        console.log(err);
    });