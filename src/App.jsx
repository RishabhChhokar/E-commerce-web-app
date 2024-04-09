import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ProductDisplay from "./ProductDisplay";
import Cart from "./Cart";
import About from "./Components/Pages/About";
import CartProvider from "./Store/CartContext";
import Home from "./Components/Pages/Home"

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <Header toggleCart={toggleCart} />
        {isCartOpen && <Cart closeCart={toggleCart} />}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<ProductDisplay />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
