





const mysql = require('mysql2')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'PFH#23kgrw9',
    database: 'todoapp'
 });
 
 //open mysql connection
 db.connect(err=>{
    if(err) console.log("Error while connecting to database: ",err)
    else console.log("database connecting...");
 });

 module.exports = db;