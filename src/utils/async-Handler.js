// here we creata a wrapper function

// In summary, the asyncHandler function is a middleware function designed to handle both synchronous and asynchronous request handlers in an Express.js application. It wraps the requestHandler function in a Promise to ensure proper error handling.


// Defining an asynchronous handler function called asyncHandler
const asyncHandler = (requestHandler) => {
    // Returning an anonymous function with req, res, and next parameters
    (req, res, next) => {
        // Wrapping the requestHandler function in a Promise to handle asynchronous operations
        // and using Promise.resolve to handle both synchronous and asynchronous code
        Promise.resolve(requestHandler(req, res, next))
            // Handling any errors that occur during the execution of the requestHandler
            .catch((err) => next(err));
    };
};

// Exporting the asyncHandler function from the module
export { asyncHandler };



// // 2nd approach
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(res, res, next){

//         }
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         });
//     }

// }