require("dotenv").config();
const express=require("express");
const cors= require("cors");
const morgan=require("morgan");
const db=require('./database');

db.connect((err)=>{
    if(err){
        console.log(err);
        console.log("Something went wrong");
    }
    else{
        console.log("Mysql connected");
    }
})
const app=express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.post("/api/register",async(req,res)=>{
    const{name,pass}=req.body;
    await db.query("insert into user_table(username,password) values(?,?) ",[name,pass],
    async(err,result)=>{
        if(err){
           return  console.log(err);
        }
        return res.json({...req.body})
    })
    
})
app.get("/:id",async(req,res)=>{
    const{id}=req.params;
    await db.query("select * from user_table where id=?",[id],
    async(err,result)=>{
        console.log(result);
    })
})
app.listen(8080,()=>{
    console.log("Server running on 8080");
})