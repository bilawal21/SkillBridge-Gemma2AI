require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const API = process.env.GROQ_API_KEY;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/ResumeAnalysis', require('./routes/analysis'));

const port = 3000;
app.listen(port, () => {
    console.log("Server is running");
});

module.exports = { API };