import logo from './logo.svg';
import './App.css';

import Check from './check.js'

import React, { useState } from 'react';

function gamegrid(arr, n) {
  const parent = document.getElementById('Game');
  parent.style.marginTop='150px'
  for (let i = 0; i < n; i++) {
    const child = document.createElement('div');
    child.style.height='200px';
    for (let j = 0; j < n; j++) {
      if(!(arr[i*n+j])) break;
      const Gchild = document.createElement('div');
      const num = document.createElement('h1');
      num.innerText =arr[i*n+j];
      num.className='hiddennumber';
      num.id='numl'+(i*n+j);

      Gchild.id='num'+(i*n+j);
      num.style.display='inline';
      
      Gchild.style.display = 'inline';
      Gchild.style.padding='80px';
      Gchild.style.margin='10px';
      Gchild.style.backgroundColor='#7f8183';
      Gchild.addEventListener('click', () => {
        Check((i * n + j),arr[i*n+j],n);
      });
      Gchild.appendChild(num);

      child.appendChild(Gchild);
    }
    parent.appendChild(child);
  }
}



function create(n) {
  const set1 = [];
  const set2 = [];
  
  for (let i = 1; i <= n; i++) {
    set1.push(i);
    set2.push(i);
  }
  
  return [set1, set2];
}

function remove(arr, removed) {
  return arr.filter((number) => number !== removed);
}

function App() {

  var card=[];
  
  let set1 = [];
  let set2 = [];
  
  const getNumber = () => {
    card=[];
    const n = document.getElementById('size').value;
    [set1, set2] = create(n); // Reassign set1 and set2
  
    for (let i = 1; i <= n; i++) {
      const a = set1[Math.floor(Math.random() * set1.length)];
      const b = set2[Math.floor(Math.random() * set2.length)];
      
      card=[...card,a,b]
      
      set1 = remove(set1, a);
      set2 = remove(set2, b);
    }

    gamegrid(card,n);
  }
  
  return (
    <div align="center">
      <h1>N x N</h1>
      <input type='text' id='size' placeholder='N'/>
      <br/>
      <br/>
      <button onClick={getNumber}>Game</button>
      
     <br/>
      <br/>
      <p id='moves'></p>
     <p id='result'></p>
      <div id='Game'>

      </div>
    </div>
  );
}

export default App;
