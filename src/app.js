// Importing necessary modules
import express from "express"; // Importing Express.js framework
import cors from "cros"; // Importing CORS middleware
import cookieParser from "cookie-parser"; // Importing cookie-parser middleware
import { set } from "mongoose"; // Importing Mongoose set method (not used in this snippet)

// Creating an instance of Express application
const app = express();

// Setting up middleware or configuration using `app.use`

// CORS middleware configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allowing CORS from specific origin, using environment variable
    Credential: true // Allowing credentials to be sent along with the requests
}));

// Middleware to parse JSON data from incoming requests
app.use(express.json({ 
    limit: "16kb" // Limiting JSON data size to 16kb
}));

// Middleware to parse url-encoded form data from incoming requests
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// Serving static assets from "public" directory
app.use(express.static("public"));

// Setting up cookieParser middleware
app.use(cookieParser());

// Exporting the Express application instance
export { app } 
