import mongoose from "mongoose";


export const conectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Database Conected : : ${connection.connection.host}`);     
    } catch (error) {
        console.log(`Error connecting to mongoDB : ${error.message}`);
        
    }
}