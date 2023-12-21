import React, { useState } from "react";

function PlantCard( { plant, updatePrice, deletePlant } ) {

  const [toggleButton, setToggleButton] = useState(true)
  const [editOnToggle, setEditOnToggle] = useState(false)
  const [newPrice, setNewPrice] = useState("")

  function handleClick(){ 
    setToggleButton(!toggleButton)
  }

  function handleEditPrice(){
    setEditOnToggle(!editOnToggle)
  }

  function handleChange(event){
    setNewPrice(event.target.value)
  }

  function handleDelete(){
    deletePlant(plant.id)
  }

  function handleSubmit(event){
    event.preventDefault()
    updatePrice(plant.id, newPrice)
    setEditOnToggle(false)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {editOnToggle ? (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="number" name="New Price" step="0.01" placeholder="Price" />
          <button>Submit</button>
        </form>
      ) : (
      <p>Price: {plant.price}</p>
      )}
      {toggleButton ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
      <button onClick={handleEditPrice}>Edit Price</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;