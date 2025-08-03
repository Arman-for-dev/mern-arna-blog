import mongoose from "mongoose";



const connectDB = async (req, res) =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected!')
    } catch (error) {
        process.env(1);
    }
}

export default connectDB;