import { useState } from "react";
import { Input, Divider } from "antd";

function FilterFood(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    // typed value in the input to lower case
    const typedValue = e.target.value.toLowerCase();
    // console.log("typed value", e.target.value.toLowerCase());
    props.filterFoodList(typedValue);

    setSearchValue(typedValue);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <label htmlFor="search">Search</label>
      <Input
        type="text"
        id="search"
        name="search"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}

export default FilterFood;
