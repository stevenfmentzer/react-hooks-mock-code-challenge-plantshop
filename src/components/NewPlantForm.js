import React, { useState } from "react";

function NewPlantForm( { addNewPlant } ) {

  const initObj = {
    "name": "",
    "image": "",
    "price": 0 
  }

  const [formData, setFormData] = useState(initObj)

  function handleChange(event){ 
    const {name, value} = event.target
    setFormData({...formData, [name]: value })
  }

  function handleSubmit(event){
    event.preventDefault()
    addNewPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;