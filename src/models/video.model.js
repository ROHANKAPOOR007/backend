// Importing necessary modules
import mongoose, { Schema } from "mongoose"; // Mongoose for MongoDB interaction
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // Mongoose plugin for pagination

// Defining the video schema
const videoSchema = new Schema(
    {
        // Video file field (cloudinary url)
        videoFile: {
            type: String,
            required: true
        },
        // Thumbnail field (cloudinary url)
        thumbnail: {
            type: String,
            required: true
        },
        // Title field
        title:{
            type: String,
            required: true
        },
        // Description field
        description: {
            type: String,
            required: true
        },
        // Duration field (in seconds)
        duration: {
            type: Number,
            required: true
        },
        // Views field (number of views)
        views: {
            type: Number,
            default: 0 // Default value is 0
        },
        // isPublished field (boolean indicating whether the video is published)
        isPublished: {
            type: Boolean,
            default: true, // Default value is true
        },
        // Owner field (reference to User model)
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User" // Reference to the User model
        }
    },
    {
        timestamps: true // Automatically manage createdAt and updatedAt fields
    }
);

// Plugin for pagination
videoSchema.plugin(mongooseAggregatePaginate);

// Exporting the Video model
export const Video = mongoose.model("Video", videoSchema);
