import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCart } from "./Store/CartContext";
import classes from "./Header.module.css";
const Header = ({ toggleCart }) => {
  const { getTotalItems } = useCart();

  return (
    <>
      <header className={classes.header}>
        <div style={{ marginLeft: "50px" }} className="header-content">
          <div>
            <NavLink
              to="/Home"
              exact
              style={{ marginRight: "10px", color: "white" }}
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              exact
              style={{ marginRight: "10px", color: "white" }}
              activeClassName="active"
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              style={{ marginRight: "540px", color: "white" }}
              activeClassName="active"
            >
              About Us
            </NavLink>
            <Button
              style={{ marginBottom: "12px", marginTop: "12px" }}
              onClick={toggleCart}
              variant="info"
              className="cart-toggle"
            >
              Cart ({getTotalItems()})
            </Button>
          </div>
        </div>
      </header>
      <h1
        style={{
          fontSize: "5rem",
          fontFamily: "sans-serif",
          textAlign: "center",
          backgroundColor: "grey",
          width: "100%",
          height: "150px",
          color: "white",
        }}
      >
        Shopaway
      </h1>
    </>
  );
};

export default Header;
