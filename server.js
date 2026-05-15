// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const { MongoClient } = require('mongodb');
const { url } = require('node:inspector');
const PORT = process.env.PORT;
const uri = process.env.MONGODB_URI;

// MIDDLEWARE
const client = new MongoClient(uri);

// ROUTES
app.get("/", async (req, res) => {
    try {
        await client.connect();

        res.json({message: "Successfully connected to the database!"})
    } catch (error) {
        res.status(500).json({message: "Failed to connect to the database."})
    }
});

// PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});