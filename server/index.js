





const express = require ('express')
const mysql = require ('mysql2')

const routers = require('./routes/ToDoRouter')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'PFH#23kgrw9',
    database: 'qrcode'
 });
 db.connect(err=>{
    if(err) console.log("Error while connecting to database: ",err)
    else console.log("Server is running...");
 })

app.use(routers)

app.listen(PORT, () => console.log(`server runing on : ${PORT}`))