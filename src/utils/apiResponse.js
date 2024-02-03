// Defining a class named ApiResponse

// The code creates a template for responses from an API. It includes information like whether the request was successful (based on the status code), some data, and an optional message to explain things further. This template helps keep API responses consistent and easy to understand.


class ApiResponse {
    // Constructor method to initialize an instance of the class
    constructor(statusCode, data, message = "Success") {
        // Initializing instance properties
        this.statusCode = statusCode; // HTTP status code of the response
        this.data = data; // Data to be included in the response
        this.message = message; // Optional message to provide additional context
        this.success = statusCode < 400; // Boolean indicating whether the request was successful
    }
}
