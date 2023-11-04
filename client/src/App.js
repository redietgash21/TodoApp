




import { useState, useEffect } from 'react';

import Axios from 'axios'
import './App.css';


function App() {
  const [todoText, setTodoText]=useState("");
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
  const getTodoList = () => {
    Axios.get(`${baseUrl}/api/showTodos`).then((response) => {
        setDispalyAll(response.data)
      console.log("show from database",response.data)
    }).catch((err) => {
      console.log('err', err);
    });
  }
    useEffect(() => {
  getTodoList();
    }, [])
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
              <button className='g'>Edit</button>
              <button className='r'>Delete</button>
            </p>
            
          </div>
         ))}
      
    </div>
  );
}

export default App;
