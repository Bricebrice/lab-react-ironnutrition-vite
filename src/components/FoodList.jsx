import foodsJson from "../foods.json";

import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import FoodBox from "./FoodBox";

import { Divider } from "antd";
import FilterFood from "./Search";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  // Need to have a copy so when the search is cleared, the updated food list is displayed0
  const [foodsData, setFoodsData] = useState(foodsJson);

  // console.log("foods", foods);

  // Delete Food
  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
    // added for the search
    setFoodsData(filteredFoods);
  };

  // Add new food
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    // added for the search
    const updatedFoodsData = [...foodsData, newFood];

    setFoods(updatedFoods);
    // added for the search
    setFoodsData(updatedFoodsData);
  };

  // Filter Food
  const filterFoodList = (str) => {
    let foodsCopy;
    // console.log("foodsCopy", foodsCopy);

    if (str === "") {
      // needed to copy data to maintain the original list, bug was that when clearing the search, it was still considering the latest typed letter, since the original list was altered
      foodsCopy = [...foodsData];
    } else {
      foodsCopy = foodsData.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoods(foodsCopy);
  };

  return (
    <div>
      <FilterFood filterFoodList={filterFoodList} />
      <AddFoodForm addNewFood={addNewFood} />
      <Divider>Food List</Divider>
      {foods.map((food, id) => (
        <FoodBox key={id} food={food} clickToDelete={deleteFood} />
      ))}
    </div>
  );
}

export default FoodList;
