





const express = require ('express')
const mysql = require ('mysql2')
const cors = require("cors")



require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'PFH#23kgrw9',
    database: 'todoapp'
 });
 db.connect(err=>{
    if(err) console.log("Error while connecting to database: ",err)
    else console.log("Server is running...");
 })

 app.post('/save', (req, res)=>{
    // console.log("========",req.body,"===========")
    const id= req.body.id;
    const todoText= req.body.todoText;
    const statuss=req.body.statuss;
    let tableEmployee = `
        insert into todoTable( 
        id,todoText,statuss) 
        values(?,?,?)`;
  
    db.query(tableEmployee,
       [ id, todoText, statuss], (err, result)=>{
        if(err){
           console.log(err);
        }
        else{
           console.log("add to table");
           res.send("add to table");
        }
       }
  );
  
  });
  app.post("/update",(req,res)=>{
 
    console.log(req.body);
    const id= req.body.id;
    const todoText= req.body.todoText;
    const statuss=req.body.statuss;
      let tableLaptop = `
         update todoTable set 
         todoText='${id}', 
         statuss='${todoText}'
         where id='${statuss}'`;
      db.query(tableLaptop,
         [id, todoText,statuss], (err, result)=>{
          if(err){
             console.log(err);    
          }
          else{
             console.log(result.affectedRows," updated");
             res.send("values updated");
          }
         }
   );
   })
   app.post("/delete",(req,res)=>{
 
    console.log(req.body);
      const id= req.body.id;
      let tableLaptop = `
         delete from todoTable 
         where id='${id}'`;
      db.query(tableLaptop,
         [id], (err, result)=>{
          if(err){
             console.log(err);
            
          }
          else{
             console.log(result.affectedRows," deleted");
             res.send("values deleted");
          }
         }
   );
   })
  app.get('/', (req,res)=>{
    const empl="select * from todoTable";
    db.query(empl, (err,result)=>{
         if(err){
          console.log(err);
         }
         else{
          res.send(result);
          console.log(result)
         
         }
    });
 })


app.listen(PORT, () => console.log(`server runing on : ${PORT}`))