// Importing the asyncHandler function from the '../utils/async-Handler.js' file
import { asyncHandler } from "../utils/async-Handler.js";

// Defining the registerUser function as an asynchronous function wrapped by asyncHandler
const registerUser = asyncHandler(async (req, res) => {
    // Sending a HTTP response with status code 200 and a JSON object containing a message
    res.status(200).json({
        message: "OK"
    });
});

// Exporting the registerUser function to make it available for use in other files
export { registerUser };
