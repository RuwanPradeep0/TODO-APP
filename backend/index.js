import express from 'express';
import dotenv from 'dotenv'; 
dotenv.config();
import { conectDB } from './database/connectDB.js';
import authRoute from './routes/authRoute.js'

console.log("JWT_SECRET Loaded: ", process.env.JWT_SECRET);


const app= express();

app.listen(5000 , ()=>{
    console.log("server is up and running on the port 5000")
})

conectDB()
app.use(express.json());
app.use('/api/auth' , authRoute)
app.use('/', () => {
    return "server is running";
  });



//6ZZcpH6nwamSkhrq
//ruwanpradeep
//mongodb+srv://ruwanpradeep:6ZZcpH6nwamSkhrq@cluster0.yicyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0