// Your code here
import "./FoodBox.css";

function FoodBox({ food }) {
  console.log("one food", food);
  return (
    <div className="foodBox">
      <p>{food.name}</p>

      <img src={food.image} alt={food.name} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings * food.calories} </b> kcal
      </p>

      <button>Delete</button>
    </div>
  );
}

export default FoodBox;
