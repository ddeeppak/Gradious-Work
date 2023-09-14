
import {react, useState} from 'react'
import './App.css';

function App() {
  const [counter, set] =useState(0);

  const color =(number)=>{
    const obj=document.getElementById('counter');
    if(number>0)
    {
      obj.style.color='green';
    }
    else if(number==0){
      obj.style.color='black';
    }
    else{
      obj.style.color='red';
    }
  }

  const increase=() =>{ 
    const x=parseInt(document.getElementById('changevalue').value);
    set(counter+x);
    color(counter+x);
  }
  const decrease=() =>{ 
    const x=parseInt(document.getElementById('changevalue').value);
    set(counter-x);
    color(counter-x)
  }
  return (
    <div id='layout' align='center'>
      <p id='counter'>Counter : {counter}</p>
      <input type='number' defaultValue={1} id='changevalue'/>
      <br></br>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
     </div>
  );
}

export default App;
