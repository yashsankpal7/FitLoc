import React from 'react'
import { Container, Stack, Modal, Button, Card, Form, FloatingLabel, Row, Col } from 'react-bootstrap';

const Signup = () => {
  return (
    <>
      <Container as={Stack} className="col-md-8 mx-auto mb-3">
        <Container  as={Stack} className="border mt-5 p-4" gap={5}>
          <h1 className="text-center p-4" >SignUp for <span className="text-primary">#Free</span>!!</h1>

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>


            <Button variant="dark" className="col-md-12" type="submit">
              Submit
            </Button>
            <Button variant="outline-secondary" className="col-md-12 mt-2" type="">
              Cancel
            </Button>
          </Form>

        </Container>
      </Container>
    </>
  )
}

export default Signup