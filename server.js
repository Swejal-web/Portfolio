const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
dotenv.config({path: './config.env'});

const app = require('./app');



const port = process.env.PORT || 9000;

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});


