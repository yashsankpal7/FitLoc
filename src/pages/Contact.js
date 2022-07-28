import React from 'react'
import { Image, Row, Col, Container, Card, Carousel, Form ,Button} from 'react-bootstrap';

const Contact = () => {

  // const style = {
  //   backdropFilter: "blur('5px')";
  // }

  return(
    <>
      <div>
        <Image
          src={require('../assets/contactUs.jpg')}
          className="img-fluid h-75"
        />
        <Carousel.Caption>
          <Card className=" p-3" style={{backdropFilter:`blur(1rem)`,backgroundColor: `rgba(0,0,0,.5)`}}>
            <Row>
              <Col className="col-md-8">
                <Container fluid >
                  <h3 className="py-2">
                    Support
                  </h3>
                  <Row className="g-2" md={2} xs={1}>
                    <Col>
                      <Card bg={'secondary'} style={{height:'10rem'}}>
                        <Card.Body className="position-absolute top-50 start-50 translate-middle">
                          <Card.Title>Stores</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card bg={'secondary'} style={{height:'10rem'}}>
                        <Card.Body className="position-absolute top-50 start-50 translate-middle">
                          <Card.Title>Delivery</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card bg={'secondary'} style={{height:'10rem'}}>
                        <Card.Body className="position-absolute top-50 start-50 translate-middle">
                          <Card.Title>Product</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card bg={'secondary'} style={{height:'10rem'}}>
                        <Card.Body className="position-absolute top-50 start-50 translate-middle">
                          <Card.Title className="d-inline-block">More to Come...</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col className="col-md-4">
                <Container fluid c>
                  <h3 className="py-2">
                      Contact Us
                  </h3>
                  <Card bg={'secondary'}>
                    <Card.Body>
                      {/* <ListGroup variant="flush" className="bg-dark"> */}
                      <Row className="mt-2">
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com" />
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
              </Col>
            </Row>
          </Card>
        </Carousel.Caption>
      </div>
    </>
  )
}

export default Contact
//Jumbotron
//

          // {/* <Container>
          //   <Row>
          //     <Col className="col-10 bg-secondary py-3 px-2" md="auto">
          //       <Row> 
          //         <h3 className="text-dark">
          //           Frequent Topics
          //         </h3>
          //       </Row> 
          //       <Row xs={1} md={2} className="g-4">
          //         <Card className="bg-dark text-white" style={{height:'5rem'}}>
          //           <Card.Img src="holder.js/100px270" alt="Card image" />
          //           <Card.ImgOverlay>
          //             <Card.Title>Card title</Card.Title>
          //           </Card.ImgOverlay>
          //         </Card>
          //         <Card className="bg-dark text-white" style={{height:'5rem'}}>
          //           <Card.Img src="holder.js/100px270" alt="Card image" />
          //           <Card.ImgOverlay>
          //             <Card.Title>Card title</Card.Title>
          //           </Card.ImgOverlay>
          //         </Card>
          //         <Card className="bg-dark text-white" style={{height:'5rem'}}>
          //           <Card.Img src="holder.js/100px270" alt="Card image" />
          //           <Card.ImgOverlay>
          //             <Card.Title>Card title</Card.Title>
          //           </Card.ImgOverlay>
          //         </Card>
          //         <Card className="bg-dark text-white" style={{height:'5rem'}}>
          //           <Card.Img src="holder.js/100px270" alt="Card image" />
          //           <Card.ImgOverlay>
          //             <Card.Title>Card title</Card.Title>
          //           </Card.ImgOverlay>
          //         </Card>
          //         <Card className="bg-dark text-white" style={{height:'5rem'}}>
          //           <Card.Img src="holder.js/100px270" alt="Card image" />
          //           <Card.ImgOverlay>
          //             <Card.Title>Card title</Card.Title>
          //           </Card.ImgOverlay>
          //         </Card>                
          //       </Row> 
          //     </Col>
          //     <Col className="bg-success" md="auto">&nbsp;</Col>
          //   </Row>
          // </Container> */}