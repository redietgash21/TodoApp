





const db = require('../db/database');

//insert to todo app table
exports.insertTodoTable = (req, res)=>{
    const queryy =  `insert into todoTable( 
                     todoText) 
                     values('hsjdfgsdjhg')`;
    const { todoText} = req.body;

    db.query(queryy, (err, result)=>{
        if(err) {console.log("errrrrrorr");
        return res.json(err);}
        else{
            console.log("errrrrrorr");
            return res.status(200).json(result);
        }
        
    });
}

