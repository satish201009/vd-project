const express = require('express');
const helmet=require('helmet');
const { json } = require('express/lib/response');
const app = express();
const path=require('path');
const cors = require('cors');

// const connectDb = require( './db/connection' );
const mongoose = require('mongoose');
// require('dotenv').config();
app.listen(7000, () => {
  console.log('server started on port 6665');
});

// connectDb();
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const conn = mongoose.connect("mongodb://localhost:27017/vd",{useNewUrlParser:true}).then(()=>{
  console.log('connection done success fully');
}).catch(()=>{
  console.log('connection is not done');
});
console.log('value of connection',conn);

/*------------------*/
app.get('/', async (req, res) => {
    res.status(404).json({ statusText: 'FAIL', statusValue: 200, message: 'Hello' });
  });
/*---------------include routes-----------*/
const userRoutes=require('./routes/userRoutes');



/*-----------------------*/
app.use('/',userRoutes);  