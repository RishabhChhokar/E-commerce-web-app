import { Button, Container, Row, Col } from "react-bootstrap";
import CartDisplay from "./CartDisplay";
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = ({ isOpen, closeCart }) => {
  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <Container>
        <h1>Cart</h1>
        <Button onClick={closeCart} variant="primary">
          Close
        </Button>
        <Row>
          {cartElements.map((item, index) => (
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
