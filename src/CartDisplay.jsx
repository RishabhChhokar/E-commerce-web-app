import { Button, Card } from "react-bootstrap";

const CartDisplay = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          ${props.price} (Quantity: {props.quantity})
        </Card.Text>
        <Button variant="danger" onClick={() => console.log("Remove props")}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartDisplay;
