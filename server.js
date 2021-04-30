import express from "express"
import mongoose from "mongoose"
import cards from "./dbCards.js"
import cors from "cors"
mongoose.connect("mongodb://localhost:27017/tinder");
const app =express();
app.use(cors());
app.use(express.json());


app.get("/home",(req,res)=>res.send("hello all"))

app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body;
    cards.create(dbCard,(err,data)=>{
        if(err)
        res.status(500).send(err)
        else
        res.status(201).send(data)
    })
})
app.get('/tinder/card',(req,res)=>{
  
    cards.find((err,data)=>{
        if(err)
        res.status(500).send(err)
        else
        res.status(200).send(data)
    })
})
app.listen(9999)