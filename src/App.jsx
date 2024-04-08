import { useState } from "react";
import { Button } from "react-bootstrap";
import ProductDisplay from "./ProductDisplay";
import Cart from "./Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Button onClick={toggleCart} variant="info" className="cart-toggle">
        Cart
      </Button>
      {isCartOpen && <Cart closeCart={toggleCart}/>}
      <ProductDisplay />
    </>
  );
};

export default App;
