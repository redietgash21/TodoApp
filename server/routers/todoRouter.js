





const express = require ('express');
const router = express.Router();
const { insertTodoTable, showTodos, editTodoTable, deleteTodoList} = require('../controllers/todoController');

//routes
router.post('/insert',insertTodoTable);
router.post('/edit',editTodoTable);
router.post('/delete',deleteTodoList);
router.get('/showTodos',showTodos);




module.exports = router;