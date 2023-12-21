import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList( { plantArray, updatePrice, deletePlant } ) {

  const renderedList = plantArray.map((plant) => {
    return(
      <PlantCard key={plant.id} plant={plant} updatePrice={updatePrice} deletePlant={deletePlant}/>
    )
  })

  return (
    <ul className="cards">{renderedList}</ul>
  );
}

export default PlantList;