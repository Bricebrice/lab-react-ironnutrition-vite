import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  console.log("foods", foods);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, id) => (
        <FoodBox key={id} food={food} clickToDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
