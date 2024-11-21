import mongoose from "mongoose";

export const connectToDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_CONNECTION_URL).then(()=>{
            console.log("Connected to DB");
        })
    } catch (error) {
        console.log("Error connecting to DB:", error.message);
        process.exit(1); //1 means error, 0 means siccess

        
    }

}