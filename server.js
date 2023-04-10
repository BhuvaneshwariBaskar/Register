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
        return res.json(`${result.insertId}`);
    })

})
app.get("/api/register",async(req,res)=>{
    const{id}=req.params;
    console.log(id);
    await db.query("select * from users_table where id=?",[id],
    async(err,result)=>{
        console.log(result);
    })
})
app.listen(8080,()=>{
    console.log("Server running on 8080");
})