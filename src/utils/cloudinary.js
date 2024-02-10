// Importing necessary modules
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuring Cloudinary using environment variables
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

// Function to upload a file to Cloudinary
const uploadOnCloudinary = async (localFilePath) =>{
    try {
        // Check if localFilePath is provided
        if(!localFilePath) return null;

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // File has been uploaded successfully
        console.log("File is uploaded on Cloudinary: ", response.url);
        return response;
    } catch (error) {
        // If an error occurs during upload, remove the locally saved temporary file
        fs.unlinkSync(localFilePath);
        return null;
    }
}

// Exporting the uploadOnCloudinary function
export {uploadOnCloudinary};
