// API Error 
// Defining a class named apiError that extends the built-in Error class
class apiError extends Error {
    // Constructor method to initialize an instance of the class
    constructor(statusCode, message = "Something went wrong", errors = [], stack) {
        // Calling the constructor of the Error class with the provided message
        super(message);
        
        // Initializing instance properties
        this.statusCode = statusCode; // HTTP status code of the error response
        this.data = null; // Optional data associated with the error (initialized to null)
        this.message = message; // Error message to describe the error
        this.success = false; // Indicating that the request was not successful
        this.errors = errors; // Optional array of error objects
        
        // Checking if a stack trace was provided
        if (stack) {
            // If a stack trace was provided, assign it to the stack property of the instance
            this.stack = stack;
        } else {
            // If no stack trace was provided, capture the stack trace for the current instance
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Exporting the apiError class from the module
export { apiError };

