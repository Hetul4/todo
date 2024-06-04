import React, { useState } from 'react'

function App() {

const [taskArray,setTaskArray] = useState([])

const handelAddTask =()=>{
  const task = prompt('enter task')
  setTaskArray([...taskArray,task])
}



const handelDeletTask = (i) => {
  const deletedTask = taskArray.filter((task, index) => index !== i);
  setTaskArray(deletedTask);
};


const handelUpdateTask = (i)=>{
  const task = prompt('Enter updated task');
  if(task){
    const updatedArray = [...taskArray]
    updatedArray[i] = task
    setTaskArray([updatedArray]);
  }
}

const color = (e) => {
  const currentColor = e.target.style.color;
  e.target.style.color = currentColor === "black" ? "green" : "black";
};

  return (
    <div>
      <h1>Todo</h1>
      <button onClick={handelAddTask}>add</button>
      {taskArray.map((task,index)=>{
        return <div key={index}>
    
        <span onClick={color} style={{cursor: "pointer"}}>{task}</span>{"  "}
        <button onClick={()=> handelDeletTask(index)}>delet</button>
         {/* <button onClick={()=> handelUpdateTask(index)}>Upadet</button> */}
         <button onClick={()=> handelUpdateTask(index)}>Upadet</button>
       </div>
      })}
    </div>  
  )
}

export default App