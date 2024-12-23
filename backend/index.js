import express from 'express';
import dotenv from 'dotenv'; 
dotenv.config();
import { conectDB } from './database/connectDB.js';
import authRoute from './routes/authRoute.js'
import taskRoute from './routes/taskRoute.js'
import cookieParser from "cookie-parser";

console.log("JWT_SECRET Loaded: ", process.env.JWT_SECRET);


const app= express();
app.use(cookieParser());

app.listen(5000 , ()=>{
    console.log("server is up and running on the port 5000")
})

conectDB()
app.use(express.json());
app.use('/api/auth' , authRoute)
app.use('/api/task' , taskRoute)
app.use('/', () => {
    return "server is running";
  });




//6ZZcpH6nwamSkhrq
//ruwanpradeep
//mongodb+srv://ruwanpradeep:6ZZcpH6nwamSkhrq@cluster0.yicyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0