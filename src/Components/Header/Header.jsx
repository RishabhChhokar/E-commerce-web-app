import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartContext from "../../Store/CartContext";
import AuthContext from "../../Store/AuthContext";
import "./Header.css";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  let totalAmount = 0;
  cartCtx.items.map((item) => (totalAmount += item.items.quantity));

  return (
    <div className="navbar">
      <header className="header">
        <div className="links">
          <Link to="/">Home</Link>
        </div>
        <div className="links">
          <Link to="/store">Store</Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
        </div>
        {!authCtx.isLoggedIn && (
          <div className="links">
            <Link to="/login">Login</Link>
          </div>
        )}
        <div className="links">
          <Link to="/contact-us">Contact Us</Link>
        </div>
        {authCtx.isLoggedIn && (
          <div className="links">
            <Link to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </div>
        )}
        {authCtx.isLoggedIn && (
          <Button className="cart-holder" onClick={showCartHandler}>
            Cart ({totalAmount})
          </Button>
        )}

        {showCart && <Cart showCartHandler={showCartHandler}></Cart>}
      </header>
      <h1>ShopAway</h1>
    </div>
  );
};

export default Header;
