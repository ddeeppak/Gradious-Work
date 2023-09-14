import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [tasks,settask]= useState(['Submit Assignment']);

  const add=()=>{
    const newtask=document.getElementById('newtask').value;
    if(!(tasks.includes(newtask)) && newtask!='')
    {
      settask([...tasks,newtask]);
    }
  }
  return (
    <div className='layout'>
      <h1>My Todo Task-List</h1>
      <div className='tasklist'>
      {tasks.map((task,index)=>(
       <div className='task'>
       <input  type='checkbox'></input>
       <label>{task}</label><br/>
       </div>
      ))}
      </div>
      <input id='newtask' type='text' placeholder='Enter the task' title='New task'/>
      <button onClick={add} title='Click to ADD'>ADD</button>
    </div>
  );
}

export default App;
