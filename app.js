const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
dotenv.config({path: './config.env'});

const mainRouter =  require('./Routes/data');

const app = express();

app.use(express.json());

app.use(cors());

app.use(compression());



app.use('/portfolio', mainRouter);

if(process.env.NODE_ENV === 'production') {

    //set static folder
    app.use(express.static(path.resolve(__dirname,'./frontend/build')))


    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'./frontend/build', 'index.html'));
})
}


module.exports = app;