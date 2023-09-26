// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const app = express();

require('dotenv').config();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressMongoSanitize());


// index.js or app.js
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    autoIndex: process.env.MONGODB_AUTO_INDEX === 'true', // Convert to a boolean
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports = app;
