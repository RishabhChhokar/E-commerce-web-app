import { Button } from "react-bootstrap";
import { useCart } from "./Store/CartContext";
const Header = ({ toggleCart }) => {
  const { getTotalItems } = useCart();
  return (
    <>
      <h1 style={{ display: "inline-block", width: "850px" }}>
        My Ecommerce Website
        <Button
          style={{
            marginBottom: "12px",
            marginLeft: "371px",
          }}
          onClick={toggleCart}
          variant="info"
          className="cart-toggle"
        >
          Cart ({getTotalItems()})
        </Button>
      </h1>
    </>
  );
};

export default Header;
