import { useCart } from "./Store/CartContext"
import { Button, Container, Row, Col } from "react-bootstrap";
import CartDisplay from "./CartDisplay";

const Cart = ({ isOpen, closeCart }) => {
  const { cartItems } = useCart();

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <Container>
        <h1>Cart</h1>
        <Button onClick={closeCart} variant="primary">
          Close
        </Button>
        <Row>
          {cartItems.map((item, index) => (
            <Col key={index} md={3} className="mb-3">
              <CartDisplay
                imageUrl={item.imageUrl}
                price={item.price}
                quantity={item.quantity}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
