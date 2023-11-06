





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
//edit to todo app table
exports.editTodoTable = (req, res)=>{
    const  todoText = req.body.todoText;
    const  id = req.body.id;
    const queryy =  `update todoTable SET  
                     todoText='${todoText}'
                    where id=${id}`;
    

        db.query(queryy,
            [todoText, id], (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("update");
                
            }
            });
}
//insert to todo app table
exports.deleteTodoList = (req, res)=>{
    const  id = req.body.id;
    const queryy =  `DELETE FROM todoTable where ${id}`;
    

        db.query(queryy,
            [id], (err, result)=>{
            if(err){
                console.log(err);
                console.log(queryy);
            }
            else{
                console.log("delete");
                
            }
            });
}

