function CategoryFilter({categories, selectedClass, changeClass}) {

  const buttonArray = categories.map(category => {
    return <button className={selectedClass === category ? "selected": ""} onClick={changeClass} key={category}>{category}</button>
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonArray}
    </div>
  );
}

export default CategoryFilter;
