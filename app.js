const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());


// import routes
const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);
//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('connected to DB!'));
//How to start listening the server
app.listen(3000);




//.env - dev tutorial
//DB_CONNECTION = mongodb://testboy:rhino94@ds155396.mlab.com:55396/rest