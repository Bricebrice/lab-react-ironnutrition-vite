// Your code here
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { Divider, Input, Button, Form } from "antd";

function AddFoodForm(props) {
  // Declare variable states
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  // Handle input values
  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newFood = { id, name, image, calories, servings };
    // console.log("Submitted: ", newFood);

    // Add new food --> from App.jsx - FoodBox component
    props.addNewFood(newFood);

    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);

    alert("Successfully submitted");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <Form.Item label="Name">
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </Form.Item>
        <Form.Item label="Image">
          <Input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </Form.Item>
        <Form.Item label="Calories">
          <Input
            type="number"
            id="calories"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </Form.Item>
        <Form.Item label="Servings">
          <Input
            type="number"
            id="servings"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </Form.Item>
        <Button type="default" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default AddFoodForm;
