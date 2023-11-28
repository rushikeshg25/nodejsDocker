import express from "express";

const app=express();

app.get("/",(req,res)=>{
    res.status(200).json("Hello Docker World");
})

app.listen(3000,()=>{
    console.log("Listening on port 3k")
})