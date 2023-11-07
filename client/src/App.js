




import { useState, useEffect } from 'react';

import Axios from 'axios'
import './App.css';
// import { editTodoTable } from '../../server/controllers/todoController';


function App() {
  const [todoText, setTodoText]=useState("");
  const [id, setId]=useState(0);
  const [dispalyAll, setDispalyAll]=useState([]);
  const baseUrl= "http://localhost:5000";
  const insertIntoUserNameTable = () => {
    Axios.post(`${baseUrl}/api/insert`, {
      todoText: todoText
    }).then((response) => {
      console.log("insert into database",response.data)
    }).catch((err) => {
      console.log('err', err);
    });
  }
  const updateTodo = (todoText, id) => {
    Axios.post(`${baseUrl}/api/edit`, {
      todoText: todoText,
      id: id
    }).then((response) => {
      console.log("updated",response.data)
    }).catch((err) => {
      console.log('err', err);
    });
  }
  const deleteTodo = (taskname) => {
    Axios.post(`${baseUrl}/api/delete`, {
      id: id
    }).then((response) => {
      console.log("delete",response.data)
    }).catch((err) => {
      console.log('err', err);
    });
  }
  const getTodoList = () => {
    Axios.get(`${baseUrl}/api/showTodos`).then((response) => {
        setDispalyAll(response.data);
       
      console.log("show from database",response.data)
    }).catch((err) => {
      console.log('err', err);
    });
  }
    useEffect(() => {
  getTodoList();
    },[id])
  return (
    <div className="App">
       <div className='container'>
         <h1>TODO APP</h1>
         <input type='text' placeholder='add todo...' onChange={(event) => { setTodoText(event.target.value)}}/>
         <button   onClick={() => { insertIntoUserNameTable(); }}>add</button>
       </div> 
      
       {dispalyAll.map((show)=>(
          <div className='lists'>
            <p>
              <span className='text'>{show.todoText} </span>
              <span className='text'>{show.id} </span>
              <button className='g' onClick={()=>{updateTodo(todoText,show.id)}}>Edit</button>
              <button className='r' 
                      onClick={()=>{deleteTodo(show.id);
                                    setId(show.id)}}>
                        Delete
              </button>
            </p>
            
          </div>
         ))}
      
    </div>
  );
}

export default App;
