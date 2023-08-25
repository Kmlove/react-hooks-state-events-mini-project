import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedClass, setSelectedClass] = useState("All");
  const [tasks, setTasks] = useState(TASKS)
 
  function changeClass(e) {
    setSelectedClass(e.target.textContent);
  }

  function onTaskDelete(value){
    setTasks(value)
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedClass={selectedClass}
        changeClass={changeClass}
      />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList 
        tasks={tasks} 
        onTaskDelete={onTaskDelete}
        selectedClass={selectedClass}
      />
    </div>
  );
}

export default App;
