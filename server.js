require('dotenv').config()

const express = require('express');
const cors=require('cors');
const morgan=require('morgan')
const db=require('./database');

const app=express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.connect((err)=>{
    if(err){
        return console.log("Something went wrong ",err);
    }
    return console.log("Mysql connected");
})

app.post("/api/register",async(req,res)=>{
    const {username,email,mobile,address}=req.body;
    await db.query("insert into users_table (username,email,mobile,address) values(?,?,?,?)",[username,email,mobile,address],
    async(err,result)=>{
        if(err){
            return console.log(err);
        }
        return res.json("Registered",result);
    })

})

app.listen(8080,()=>{
    console.log("Server running on 8080");
})