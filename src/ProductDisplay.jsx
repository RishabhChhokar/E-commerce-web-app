import { Container, Row, Col } from "react-bootstrap";
import ProductWrapper from "./ProductWrapper";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDisplay = () => {
  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Col
            style={{
              display: "inline-block",
              marginRight: "13px",
              marginLeft: "1px",
            }}
            key={index}
            md={3}
          >
            <ProductWrapper
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductDisplay;
