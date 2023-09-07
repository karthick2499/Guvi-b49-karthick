import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Products } from "./Products.jsx";
import { Footer } from "./Footer.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  return (
    <div className="App">
      <div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
function ProductList() {
  const [count, setCount] = useState(0);

  let prod = [
    {
      name: "Fancy Products",
      price: "$40.00 - $80.00",
    },
    {
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00",
    },
    {
      name: "Sale Item",
      price: "$50.00",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
    {
      name: "Sale Item",
      price: "$50.00",
    },
    {
      name: "Fancy Products",
      price: "$120.00 - $280.00",
    },
    {
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00",
    },
    {
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
    },
  ];
  return (
    <div>
      <div className="nav-bar">
        <h3 className="start">Start Bootstrap</h3>
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>

        <div className="cart">
          <ShoppingCartIcon></ShoppingCartIcon>Cart {count}
        </div>
      </div>

      <div className="sub-topic">
        <h1 className="heading">Shop in Style</h1>
        <span>with this home page template</span>
      </div>
      <div className="boxes">
        {prod.map((pro, index) => (
          <Products
            product={pro}
            key={index}
            count={count}
            setCount={setCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;