import { useState } from "react";
import Header from "./Header";
import ProductDisplay from "./ProductDisplay";
import Cart from "./Cart";
import CartProvider from "./Store/CartContext";
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Header toggleCart={toggleCart} />
      {isCartOpen && <Cart closeCart={toggleCart} />}
      <ProductDisplay />
    </CartProvider>
  );
};

export default App;
