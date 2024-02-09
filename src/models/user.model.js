// Importing necessary modules
import mongoose, { Schema } from "mongoose"; // Mongoose for MongoDB interaction
import Jwt from "jsonwebtoken"; // JSON Web Token for token generation
import bcrypt from "bcrypt"; // bcrypt for password hashing

// Defining the user schema
const userSchema = new Schema(
    {
        // Username field
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // index is for faster searching
        },
        // Email field
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        // Full name field
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true // index is for faster searching
        },
        // Avatar field (cloudinary url)
        avatar: {
            type: String,
            required: true,
        },
        // Cover image field (cloudinary url)
        coverImage: {
            type: String,
        },
        // Watch history field (references Video model)
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        // Password field (hashed)
        password: {
            type: String,
            required: [true, "Password is required"], // Error message if password is not provided
        },
        // Refresh token field
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true // Automatically manage createdAt and updatedAt fields
    }
);

// Middleware to hash password before saving
userSchema.pre("save", async function(next) {
    // Check if the password has been modified
    if (!this.isModified("password")) return next();

    // Hash the password
    this.password = await bcrypt.hash(this.password, 10); // Hashing password with salt factor of 10
    next();
});

// Method to check if password is correct
userSchema.methods.isPasswordCorrect = async function(password) {
    // Compare provided password with hashed password
    return await bcrypt.compare(password, this.password);
};

// Method to generate access token
userSchema.methods.generateAccessToken = function() {
    // Create and sign JWT token with user data
    return Jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET, // Secret key for signing
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY // Expiry time for the token
        }
    );
};

// Method to generate refresh token
userSchema.methods.generateRefreshToken = function() {
    // Create and sign JWT token with user data
    return Jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET, // Secret key for signing
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY // Expiry time for the token
        }
    );
};

// Exporting the User model
export const User = mongoose.model("User", userSchema);
