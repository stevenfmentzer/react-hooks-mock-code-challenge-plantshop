import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plantArray, setPlantArray] = useState([])
const [showPlantArray, setShowPlantArray] = useState([])

useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then(res => res.json())
  .then(data => {
    setPlantArray(data)
    setShowPlantArray(data)
})},[])

function addNewPlant(plant){ 
  fetch("http://localhost:6001/plants",{ 
    method : "POST", 
    headers : { 
      "Content-type" : "application/json"},
    body : JSON.stringify(plant)})
  .then(res => res.json())
  .then(data => {
    setPlantArray([...plantArray, data])
    setShowPlantArray([...plantArray, data])
  })
}

function updatePrice(plantId, newPrice){
  fetch(`http://localhost:6001/plants/${plantId}`,{ 
    method : "PATCH", 
    headers : { 
      "Content-type" : "application/json"},
    body : JSON.stringify({price : newPrice})})
    .then(res => res.json())
    .then(updatedPlant => {
      const updatedArray = plantArray.map(plant =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
      setShowPlantArray(updatedArray);
      setPlantArray(updatedArray);
    })}

function deletePlant(plantId){
  fetch(`http://localhost:6001/plants/${plantId}`,{ 
    method : "DELETE"}) 
    .then(res => {
      if (res.ok) {
        console.log("Plant deleted successfully");
        const updatedArray = (plantArray).filter(plant => plant.id !== plantId)
        setPlantArray(updatedArray)
        setShowPlantArray(updatedArray)
      } else {
        console.error("Failed to delete plant");
      }})
    }

function searchArray(searchString){
  console.log("SEARCH", searchString)
  console.log(showPlantArray)
  const displayArray = plantArray.filter((plant) => 
    (plant.name.toLowerCase().includes(searchString.toLowerCase()))
  )
  setShowPlantArray(displayArray)
}

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchArray={searchArray} />
      <PlantList plantArray={showPlantArray} updatePrice={updatePrice} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;