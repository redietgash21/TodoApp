





const express = require ('express')
const app = express()
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors = require("cors")

//import routers
const todo = require('./routers/todoRouter')

//middle ware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}))
app.use(bodyParser.urlencoded({
   limit: "5mb",
   extended: true
}))
app.use(cors());

//route middleware
app.use('/api', todo)

//port
const port = 5000;
app.listen(port, ()=>{
   console.log(`server runing on port ${port}`)
})

// require('dotenv').config()


// const PORT = process.env.port || 5000

// app.use(express.json())
// app.use(cors())



//  app.post('/save', (req, res)=>{
//     // console.log("========",req.body,"===========")
//     const id= req.body.id;
//     const todoText= req.body.todoText;
//     const statuss=req.body.statuss;
//     let tableEmployee = `
//         insert into todoTable( 
//         id,todoText,statuss) 
//         values(?,?,?)`;
  
//     db.query(tableEmployee,
//        [ id, todoText, statuss], (err, result)=>{
//         if(err){
//            console.log(err);
//         }
//         else{
//            console.log("add to table");
//            res.send("add to table");
//         }
//        }
//   );
  
//   });
//   app.post("/update",(req,res)=>{
 
//     console.log(req.body);
//     const id= req.body.id;
//     const todoText= req.body.todoText;
//     const statuss=req.body.statuss;
//       let tableLaptop = `
//          update todoTable set 
//          todoText='${id}', 
//          statuss='${todoText}'
//          where id='${statuss}'`;
//       db.query(tableLaptop,
//          [id, todoText,statuss], (err, result)=>{
//           if(err){
//              console.log(err);    
//           }
//           else{
//              console.log(result.affectedRows," updated");
//              res.send("values updated");
//           }
//          }
//    );
//    })
//    app.post("/delete",(req,res)=>{
 
//     console.log(req.body);
//       const id= req.body.id;
//       let tableLaptop = `
//          delete from todoTable 
//          where id='${id}'`;
//       db.query(tableLaptop,
//          [id], (err, result)=>{
//           if(err){
//              console.log(err);
            
//           }
//           else{
//              console.log(result.affectedRows," deleted");
//              res.send("values deleted");
//           }
//          }
//    );
//    })
//   app.get('/', (req,res)=>{
//     const empl="select * from todoTable";
//     db.query(empl, (err,result)=>{
//          if(err){
//           console.log(err);
//          }
//          else{
//           res.send(result);
//           console.log(result)
         
//          }
//     });
//  })


// app.listen(PORT, () => console.log(`server runing on : ${PORT}`))