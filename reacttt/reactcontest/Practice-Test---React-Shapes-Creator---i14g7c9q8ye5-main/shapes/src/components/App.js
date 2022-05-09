import React, {useState} from 'react'
import '../styles/App.css';

const App = () => {
   const [count,setCount]  =  useState(0)
   const [elements,setElements]  =  useState([])
   const [shape,setShape]  =  useState("square")
   
   const  addShapes =()=>{

    // console.log(shape);
    if (shape == 'square'){
      setElements([...elements,<div className='square' >{count}</div>])
    }else{
      setElements([...elements,<div className='circle' >{count}</div>])

    }
      setCount(count+1)
   }

  return (
    <>
    {/* <h1>NS assignment</h1> */}
    <div id="main">
      <div id="shape-creator">
      <select name="shapess" id="aaa" onChange={(event)=>{ setShape(event.target.value) } }>

        <option value="square">Square</option>

        <option value="circle">Circle</option>

      </select>
      <button onClick={addShapes}>Add shape</button>
      </div>
      <div id="shapes-holder">

      {elements.map((element)=> (element))}
      </div>
    </div>

   
    </>
  )
}


export default App;
