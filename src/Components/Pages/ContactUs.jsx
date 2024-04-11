import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");

  async function addContactUsHandler(contact) {
    const response = await fetch(
      "https://react-submit-form-288ab-default-rtdb.firebaseio.com/contact-us.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Contact-Type": "contact-us/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setFormError("* Please fill in all details");
      return;
    }

    const contact = {
      Name: name,
      Email: email,
      PhoneNumber: phoneNumber,
    };

    addContactUsHandler(contact);
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" && email.trim() !== "" && phoneNumber.trim() !== ""
    );
  };

  return (
    <Container>
      <h2 className="contact">Contact Us</h2>
      <Row className="contact-page">
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="contact-form" onSubmit={submitHandler}>
            {formError && <p className="text-danger">{formError}</p>}
            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
