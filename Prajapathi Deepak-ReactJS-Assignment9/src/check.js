import './App.css';
import {react , useState} from 'react'

let a = -1;
let b = -1;
let c = -1;
let d = -1;
let cards=0;
let moves=0;
let starttime;
let endtime;

function Check(index, value,n) {
  moves++;
  const r = document.getElementById('num' + index);
  const numl = document.getElementById('numl' + index);
  numl.style.animation = 'numbervb 1s';
  numl.style.opacity= 1;
  r.style.backgroundColor = 'blue';
  if (a === -1 || c===index) {
    a = value;
    c = index;
  } else if (b === -1) {
    b = value;
    d = index;
    
    if (d !== c) {
      if (a === b) {
        document.getElementById('num' + c).style.backgroundColor = 'green';
        document.getElementById('num' + d).style.backgroundColor = 'green';
        document.getElementById('result').innerText='Congratulations, You got a Match';
        cards=cards+2;
      } else {
        document.getElementById('num' + c).style.backgroundColor = '#7f8183';
        document.getElementById('num' + d).style.backgroundColor = '#7f8183';
        document.getElementById('numl' + c).style.opacity= 0;
        document.getElementById('numl' + d).style.opacity= 0;
        document.getElementById('result').innerText='Try Again'; 
      }
          a = -1;
          b = -1;
          c = -1;
          d = -1;
    }
  }
  if (moves === 1) {
    starttime = new Date();
  }
  
  if (cards === n * 2) {
    endtime = new Date();
    document.getElementById('result').innerText='Game Over'; 
  }
  
  const min=(endtime-starttime)/1000
  document.getElementById('moves').innerText=('Moves :'+moves+(cards==n*2?('  (Time: '+min+' sec)'):''));
}

export default Check;
