import { useCart } from "./Store/CartContext";
import { Card, Button } from "react-bootstrap";

const ProductWrapper = (props) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      quantity: 1,
    });
  };

  return (
    <Card style={{ width: "10rem" }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductWrapper;
