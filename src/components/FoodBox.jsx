// Your code here
import { Card, Button } from "antd";

function FoodBox({ food, clickToDelete }) {
  // console.log("one food", food);
  return (
    <div>
      <Card title={food.name} style={{ width: 230, margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} />

        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>

        <p>
          <b>Total Calories: {food.servings * food.calories} </b> kcal
        </p>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => clickToDelete(food.id)}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default FoodBox;
