import { Card } from "react-bootstrap";

const ProductWrapper = (props) => {
  return (
    <Card style={{ width: "18rem"}}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductWrapper;
