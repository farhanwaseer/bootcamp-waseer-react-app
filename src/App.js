import React, {useState} from 'react';
import {Message} from './message.js';
import './App.css'; 

export default function App(){
  
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'daylight' : 'nightlight'}`}>
      <h1 id='name'>Farhan Waseer</h1>
      <hr />
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      <Message  value={count} />
  <button onClick={
    ()=> setCount(count + 1)
  }>Update Counter</button>

  <button onClick={()=>setMorning(!isMorning)}>Change Color</button>
    </div>
  )
}

