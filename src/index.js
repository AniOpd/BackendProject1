// require("dotenv").config({ path: "./.env" }); since it breaks the consistency of the codebase.
// we use import instead of require in the codebase.
import dotenv from "dotenv";


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// import express from "express";
// const app = express();
import connectDB from "./db/index.js";


dotenv.config({ path: "./.env" });


connectDB()


















/*
(async ()=>{
    try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log("Error",error)
            throw error
         })

         app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
         })
    }
    catch(e){
        console.log("Error",e)
        throw e
    }
})()
*/