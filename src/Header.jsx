import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCart } from "./Store/CartContext";

const Header = ({ toggleCart }) => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <h1 style={{ display: "inline-block", width: "850px" }}>
          My Ecommerce Website
        </h1>
        <div>
          <NavLink
            to="/"
            exact
            style={{ marginRight: "10px" }}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={{ marginRight: "10px" }}
            activeClassName="active"
          >
            About Us
          </NavLink>
          <Button
            style={{ marginBottom: "12px" }}
            onClick={toggleCart}
            variant="info"
            className="cart-toggle"
          >
            Cart ({getTotalItems()})
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
