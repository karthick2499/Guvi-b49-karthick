import Button from "@mui/material/Button";
import { useState } from "react";

export function Products({ product, count, setCount }) {
  const [show, setShow] = useState(false);

  function addToCart() {
    setShow(!show);
    setCount(count + 1);
  }

  function removeFromCart() {
    setShow(!show);
    setCount(count - 1);
  }

  return (
    <div className="items">
      <div className="dimensions">
        <h2>
          450<span className="multiply">✖</span>300
        </h2>
      </div>
      <div>
        <div className="product">
          <h2 className="product-name">{product.name}</h2>
          <span className="product-rating">{product.rating}</span>
          <p className="product-rupees">{product.price}</p>
          {!show ? (
            <Button
              className="productButton"
              variant="contained"
              onClick={addToCart}
            >
              Add to cart
            </Button>
          ) : (
            ""
          )}
          {show ? (
            <Button
              className="productButton"
              variant="contained"
              color="error"
              onClick={removeFromCart}
            >
              Remove from cart
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}