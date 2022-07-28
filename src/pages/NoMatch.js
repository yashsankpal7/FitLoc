import React from 'react';
import { Container, Image, Carousel, Card } from 'react-bootstrap';

const NoMatch = () => (
  <>
    <div className="NoMatch">
      {/* <Carousel.Caption style={{position:'absolute',top:'10rem'}}> */}
        <Card className="p-3 NoMatch-Card" text="light" style={{backdropFilter:`blur(1px)`,backgroundColor: `rgba(0,0,0,.5)`,width:'75%',marginLeft:'10rem'}}>
          <Card.Header className="h1 text-center">404</Card.Header>
          <Card.Body className="h3 text-center">
            Page not found
          </Card.Body>
        </Card>
      {/* </Carousel.Caption> */}
    </div>
  </>
)

export default NoMatch