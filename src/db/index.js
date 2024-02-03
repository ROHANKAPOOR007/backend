// Importing the mongoose library for MongoDB interactions
import mongoose from "mongoose";

// Importing the constant variable DB_NAME from the constants.js file
import { DB_NAME } from "../constants.js";

// Defining an asynchronous function called connectDB to establish a connection to the MongoDB database
const connectDB = async () => {
    try {
        // Establishing a connection to the MongoDB database using mongoose.connect() method
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // Logging a success message if the connection is established
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Catching and handling any errors that occur during the connection process
        console.log("MONGODB connection Error:", error);
        
        // Exiting the Node.js process with code 1 (indicating failure) if an error occurs
        process.exit(1);
    }
}

// Exporting the connectDB function from the module
export default connectDB;
