import React from "react";

function Task({category,text,index,display,setDisplay}) {
 // const [delId,setdel]=useState("")
  function handleDelete(){
    console.log(text)
    setDisplay(display.filter((item)=>(item.text.trim()!==text.trim())))  
  }
  return (
    <div className="task" id={index}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;