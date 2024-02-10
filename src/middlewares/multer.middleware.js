// Importing the multer library
import multer from "multer";

// Configuring storage for multer
const storage = multer.diskStorage({
    // Setting the destination directory where uploaded files will be stored
    destination: function(req, file, cb){
        // The destination directory is "./public/temp"
        cb(null, "./public/temp");
    },
    // Setting the filename for the uploaded file
    filename: function(req, file, cb){
        // The filename will be the same as the original filename
        cb(null, file.originalname);
    }
});

// Exporting the configured multer middleware
export const upload = multer({
    storage 
});
