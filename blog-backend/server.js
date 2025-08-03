import "dotenv/config";
import express from "express";
import cors from 'cors';
import connectDB from "./config/db.js";


const app = express();
connectDB();

//middleware
app.use(express.json());


const corsOptions = {
    origin: ["http://localhost:5173"],
    Credential: true
}

app.use(cors(corsOptions))

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});