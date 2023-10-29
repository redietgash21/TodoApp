





const db = require('../db/database');

//insert to todo app table
exports.insertTodoTable = (req, res)=>{
    const  todoText = req.body.todoText;
    const queryy =  `insert into todoTable( 
                     todoText) 
                     values('${todoText}')`;
    

        db.query(queryy,
            [todoText], (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("save to database");
                
            }
            });
}

//show to do
exports.showTodos=(req,res)=>{
    const queryy="select * from todoTable"

    db.query(queryy, (err,result)=>{
        if(err){
         console.log(err);
        }
        else{
         res.send(result);
         console.log(result)
        
        }
   });
};
