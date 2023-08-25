import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const initialVal = {text: "", category: ""}
  const [formData, setFormData] = useState(initialVal)
  
  const optionsArray = categories
  .map((category) => {
    if(category === "All"){
      return ""
    } else{
      return category
    }

  }).map((category) => {
    return <option key={category}>{category}</option>;
  });

  function handleChange (e){
    const value = e.target.value
    const key = e.target.name

    setFormData({...formData, [key]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    if(formData.category === "" && formData.text === ""){
      alert("Please fill out the form before submitting!")
    } else if(formData.category === ""){
      alert("Please select a category before submitting!")
    } else if(formData.text === ""){
      alert("Please enter a task before submitting!")
    } else{
      onTaskFormSubmit(formData)
      setFormData(initialVal)
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {optionsArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
