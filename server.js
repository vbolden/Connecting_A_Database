// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const {MongoClient} = require('mongodb');
const PORT = process.env.PORT;
const uri = process.env.MONGODB_URI

// MIDDLEWARE

// ROUTES

// PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});