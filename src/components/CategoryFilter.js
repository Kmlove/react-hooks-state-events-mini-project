import React, { useState } from "react";

function CategoryFilter({categories}) {

  const [selectedClass, setSelectedClass] = useState("")

  function handleClick(e){
    setSelectedClass(e.target.textContent)
  }
  
  const buttonArray = categories.map(category => {
    return <button className={selectedClass === category ? "selected": ""} onClick={handleClick} key={category}>{category}</button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonArray}
    </div>
  );
}

export default CategoryFilter;
