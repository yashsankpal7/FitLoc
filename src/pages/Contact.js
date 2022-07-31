import React from 'react'
import {  Row, Col, Container, Card, Carousel, Form ,Button} from 'react-bootstrap';




const Contact = () => {

  // const style = {
  //   backdropFilter: "blur('5px')";
  // }

  return(
    <>
      <div className="Contact">
        <Card className="p-3 Contact-Card" text='light' style={{backdropFilter:`blur(5px)`,backgroundColor: `rgba(0,0,0,.5)`,width:'75%',marginLeft:'10rem'}}>
              <Container fluid c>
                <h3 className="py-2">
                    Contact Us
                </h3>
                <Card bg={'secondary'}>
                  <Card.Body>
                    {/* <ListGroup variant="flush" className="bg-dark"> */}
                    <Row className="mt-2">
                      <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                        <Form.Label>Related Topic</Form.Label>
                        <Form.Select>
                          <option value="0">Corporate</option>
                          <option value="1">Membership</option>
                          <option value="2">Online Order</option>
                          <option value="3">Product</option>
                          <option value="4">Returns</option>
                          <option value="5">Stores</option>
                          <option value="6">Delivery</option>
                          <option value="7">Corporate</option>
                          <option value="8">Workshop</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Row className="mt-2">
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Query</Form.Label>
                        <Form.Control as="textarea" placeholder="type here..." rows={5}/>
                      </Form.Group>
                    </Row>
                    <Row className="mt-3">
                      <Button variant="dark"> Submit</Button>
                    </Row>
                    {/* </ListGroup> */}
                  </Card.Body>
                </Card>
              </Container>
        </Card>
      </div>
    </>
  )
}

export default Contact

