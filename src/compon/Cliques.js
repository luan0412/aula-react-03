import React, { useState } from 'react';


export default function Cliques(){

    let [num,setNum] =useState(0)
  

    return(
      <div className="App">
   <>
       
        <p> Contador = {num}</p>
        <button id ="somar" onClick = {()=>setNum(num-=1)}>Decremento</button>
        <button id="subtrair" onClick = {()=>setNum(num+=1)}>Incremento</button>
  
    </>
    </div>
   )
}