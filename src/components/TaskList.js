import React from "react";
import Task from "./Task"

function TaskList({ tasks }) {

  const taskListArray = tasks.map(task => {
    return <Task key={task.text} category={task.category} text={task.text}/>
  })

  return (
    <div className="tasks">
      {taskListArray}
    </div>
  );
}

export default TaskList;
