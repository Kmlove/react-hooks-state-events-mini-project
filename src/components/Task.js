import React, { useState } from "react";

function Task({category, text}) {
  
  const [deleteMe, setDeleteMe] = useState(false)
 
  const display = deleteMe ? {display: "none"} : {dispaly: "normal"}

  return (
    <div className="task" style={display}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={e => setDeleteMe(true)}>X</button>
    </div>
  );
}

export default Task;
