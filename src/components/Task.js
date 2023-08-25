function Task({category, text, tasks, onTaskDelete}) {

  function handleDelete(){
    const filteredArray = tasks.filter((task) => task.text !== text)
    onTaskDelete(filteredArray)
  }

  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
