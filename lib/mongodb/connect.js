import mongoose from "mongoose";

let isConnected = false; 

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }
    if(!process.env.MONGODB_URL) {
        console.log("MONGODB_URL is not defined in .env file");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
        isConnected = false;
    }
};