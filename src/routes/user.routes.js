// Importing the Router class from the 'express' package
import { Router } from "express";

// Importing the registerUser function from the user.controller.js file located in the '../controllers' directory
import { registerUser } from "../controllers/user.controller.js";

// Creating a new instance of the Router class
const router = Router();

// Defining a route for handling user registration
// When a POST request is made to '/register', it will be handled by the registerUser function
router.route("/register").post(registerUser);

// Exporting the router object to make it available for use in other files
export default router;
