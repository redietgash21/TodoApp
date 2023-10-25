




import { useState, useEffect } from 'react';

import Axios from 'axios'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"


function App() {
  const [todo, setTodo]=useState([])
  const [text, setText]=useState("")
  const baseUrl= "http://localhost:5000"
  const getAllToDo = (setToDo)=>{
    Axios
    .get(baseUrl)
    .then((result)=>{
        console.log('data --->', result.data[0].id);
        setToDo(result.data)
    })
}
  useEffect(()=>{
    getAllToDo(setTodo)
  },[])

  return (
    <div className="App">
       <div className='container'>
         <h1>TODO APP</h1>
         <div className='top'>
            <input type='text' placeholder='Add Todo...'></input>
            <div className='add'>Add</div> 
         </div>
         <div className='list'>
         <div className='todo'>
    <div className='text' style={{color: 'yellow', backgroundColor:'blue', width: '30px'}}>
       
    </div>
    {/* <div className='icons'>
       <BiEdit className='icon' onClick={updateMode}/>
       <AiFillDelete className='icon' onClick={deleteTodo}/>
    </div> */}

    </div>
           {/* {todo.map((item)=> <TodoComponent key={item.id} text={item.text}/>)} */}
            skjhfjkdhv
            </div>
       </div>
    </div>
  );
}

export default App;
