import React from 'react'
import { Stack, Row, Col, Button, Form, Container } from 'react-bootstrap';

const Login = () => {
  return (
    <>
    <Container as={Stack} className="col-md-5 mx-auto mb-3">
      <Container  as={Stack} className="border mt-5 p-4" gap={5}>
        <h1 className="text-center p-4" >Log-In</h1>

        <Form>
          <Form.Group className="m-2 mb-4" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="m-2 mb-4 "  controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" className="col-md-12 mt-4" type="submit">
            Submit
          </Button>
        </Form>

      </Container>
    </Container>
  </>
  )
}

export default Login