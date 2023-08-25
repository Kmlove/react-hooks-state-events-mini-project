import React from "react";
import Task from "./Task"

function TaskList({ tasks, selectedClass, onTaskDelete}) {

  const filterArray = tasks.filter((task) => {
    if(selectedClass === "All"){
      return true
    }

    return selectedClass === task.category
  })

  const taskListArray = filterArray.map(task => {
    return (
      <Task 
        key={task.text} 
        category={task.category} 
        text={task.text}
        tasks={tasks}
        onTaskDelete={onTaskDelete}
      />
    )
  })

  return (
    <div className="tasks">
      {taskListArray}
    </div>
  );
}

export default TaskList;
