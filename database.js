const mysql=require('mysql');

const db=mysql.createConnection({
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST
})
module.exports=db;
