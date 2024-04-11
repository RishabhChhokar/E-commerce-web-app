import { NavLink, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCart } from "./Store/CartContext";
import classes from "./Header.module.css";

const Header = ({ toggleCart }) => {
  const { getTotalItems } = useCart();
  const location = useLocation();

  const isStorePage = location.pathname === "/";

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
              style={{ marginRight: "10px", color: "white" }}
              activeClassName="active"
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              style={{ marginRight: "10px", color: "white" }}
              activeClassName="active"
            >
              Product
            </NavLink>
            <NavLink
              to="/login"
              style={{ marginRight: "10px", color: "white" }}
              activeClassName="active"
            >
              login
            </NavLink>
            <NavLink
              to="/contact_us"
              style={{ marginRight: "300px", color: "white" }}
              activeClassName="active"
            >
              Contact us
            </NavLink>
            {isStorePage && (
              <Button
                style={{ marginBottom: "12px", marginTop: "12px" }}
                onClick={toggleCart}
                variant="info"
                className="cart-toggle"
              >
                Cart ({getTotalItems()})
              </Button>
            )}
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
