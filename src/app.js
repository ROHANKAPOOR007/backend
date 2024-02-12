// Importing necessary modules
import express from "express"; // Importing Express.js framework
import cors from "cors"; // Importing CORS middleware
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


// Importing the router object from the './routes/user.routes.js' file
import router from "./routes/user.routes.js";

// Declaring routes for the application
// Here, the app is assumed to be an instance of Express.js application
// The app.use() method is used to mount the router middleware at the specified path
// When a request is made to '/api/v1/users', it will be forwarded to the router object defined in user.routes.js
// This means that any routes defined in user.routes.js will be relative to '/api/v1/users'
// For example, the route defined in user.routes.js as '/register' will be accessible at '/api/v1/users/register'
app.use("/api/v1/users", router);

// After mounting the router middleware, the routes will be accessible under the specified path
// For instance, the route for registering users will be available at:
// http://localhost:8000/api/v1/users/register

// Exporting the Express application instance
export { app } 
