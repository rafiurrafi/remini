import { useState } from "react";
import { productService, toppings } from "./utils";
const FilterApp = () => {
  const [checkedState, setCheckedState] = useState([100, 200]);
  console.log(checkedState);
  return (
    <div>
      <div>
        <div>
          <input
            type="checkbox"
            id="100"
            name="hundred"
            value="100"
            checked={false}
          />{" "}
          100
        </div>
        <div>
          <input type="checkbox" /> 200
        </div>
        <div>
          <input type="checkbox" /> 300
        </div>
        <div>
          <input type="checkbox" /> 400
        </div>
      </div>
      <div>
        <h1>Products</h1>
        {productService.map((product) => (
          <div key={product.key}>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterApp;
