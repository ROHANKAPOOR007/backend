// require('dotenv').config({path: './env'});
// Importing the dotenv module to load environment variables from a .env file
import dotenv from "dotenv";

// Importing the connectDB function to establish a connection to the database
import connectDB from "./db/index.js";

// Importing the Express application instance from the app.js file
import { app } from "./app.js";

// Loading environment variables from a .env file
dotenv.config({
    path: './env' // Specifying the path to the .env file
});

// Establishing a connection to the database
connectDB() // database connection function is called
.then(() => {
    // Starting the Express server after the database connection is successful
    app.listen(process.env.PORT || 8000, () => {
        // Listening on the specified port from the environment variables or defaulting to 8000
        console.log(`Server is Connected at ${process.env.PORT}`);
    });
})
.catch((err) => {
    // Handling errors if the database connection fails
    console.log("MongoDB Connection Failed !!", err);
});



















// 1st Approach to Connect DB
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express';

const app = express()

//iife
;(async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR:", error)
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR:", error);
    }
})()


function connectDB(){

}

connectDB();
*/