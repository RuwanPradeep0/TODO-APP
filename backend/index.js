import express from 'express';
import { conectDB } from './database/connectDB.js';
import dotenv from 'dotenv'

dotenv.config();

const app= express();

app.listen(5000 , ()=>{
    console.log("server is up and running on the port 5000")
})

conectDB()



//6ZZcpH6nwamSkhrq
//ruwanpradeep
//mongodb+srv://ruwanpradeep:6ZZcpH6nwamSkhrq@cluster0.yicyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0