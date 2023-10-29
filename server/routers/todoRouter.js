





const express = require ('express');
const router = express.Router();
const { insertTodoTable, showTodos} = require('../controllers/todoController');

//routes
router.post('/insert',insertTodoTable);
router.get('/showTodos',showTodos);




module.exports = router;