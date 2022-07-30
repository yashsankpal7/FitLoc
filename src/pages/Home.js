import React from 'react'
import { Container, Stack, Carousel, Image, Card, ButtonGroup ,Button,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigate = useNavigate();
  return (
    <>
    <Stack>
      <Carousel_/>
      <Trends navigate={navigate}/>
      <Offers/>
    </Stack>
  </>
)
}

export default Home

const Carousel_ = ()=>{
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>

      <Carousel fade onSelect={handleSelect} pause="hover">
        <Carousel.Item interval={5000}>
          <Image
            className="d-inline w-100 h-10"
            src={require('../assets/anastase-maragos-HyvE5SiKMUs-unsplash.jpg')}
            alt="First slide"
            style={{height:'38rem'}}
          />
          <Carousel.Caption>
            <Container className="position-relative" style={{height:'20rem'}}>
              <h1 className="position-absolute top-0 start-0 text-success">
                The clock is <span className="text-light">ticking</span>. 
              </h1>
              <h1 className="position-absolute top-0 start-0 mt-5 text-success">

              Are you becoming the <span className="text-light">person</span> you want to be <span className="text-light">?</span>
              </h1>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={require('../assets/anastase-maragos-FP7cfYPPUKM-unsplash.jpg')}
            alt="Second slide"
            style={{height:'38rem'}}
          />
          <Carousel.Caption>
            <Container className="position-relative" style={{height:'20rem'}}>
                <h1 className="position-absolute top-0 start-0 text-success">
                  The clock is <span className="text-light">ticking</span>. 
                </h1>
                <h1 className="position-absolute top-0 start-0 mt-5 text-success">
                  Are you becoming the <span className="text-light">person</span> you want to be <span className="text-light">?</span>
                </h1>
              </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={require('../assets/mor-shani-li4dxZ0KYRw-unsplash.jpg')}
            alt="Third slide"
            style={{height:'38rem'}}
          />
          <Carousel.Caption>
          <Container className="position-relative" style={{height:'20rem'}}>
              <h1 className="position-absolute top-0 start-0 text-success">
                The clock is <span className="text-light">ticking</span>. 
              </h1>
              <h1 className="position-absolute top-0 start-0 mt-5 text-success">

                Are you becoming the <span className="text-light">person</span> you want to be?
              </h1>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={require('../assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg')}
            alt="Third slide"
            style={{height:'38rem'}}
          />
          <Carousel.Caption>
          <Container className="position-relative" style={{height:'20rem'}}>
              <h1 className="position-absolute top-0 start-0 text-success">
                The clock is <span className="text-light">ticking</span>. 
              </h1>
              <h1 className="position-absolute top-0 start-0 mt-5 text-success">

                Are you becoming the <span className="text-light">person</span> you want to be?
              </h1>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

const Trends = ({navigate})=>{
  return (
    <>
      <Container className="pt-5 pb-5" fluid>
        <div className="position-relative">
          <h3 className="p-2">Trends for You</h3>
        </div>
        <Stack direction="horizontal">
          <Row className="g-4" xs={1} md={4}>
          <Col>
          <Card bg='dark' text='white'>
            <Card.Img variant="top" src={require('../assets/run.jpg')} style={{height:'18rem'}} />
            <Card.ImgOverlay>
              <Card.Title>Run</Card.Title>
            </Card.ImgOverlay>
            <Card.Body as={ButtonGroup}>
              <Button variant="dark" onClick={()=>navigate("/products/run")} className="text-white">
                Explore
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card bg='dark' text='white'>
            <Card.Img variant="top" src={require('../assets/men.jpg')} style={{height:'18rem'}} />
            <Card.ImgOverlay>
              <Card.Title>Men</Card.Title>
            </Card.ImgOverlay>
            <Card.Body as={ButtonGroup}>
              <Button variant="dark" onClick={()=>navigate("/products/men")} className="text-white">
                Explore
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card bg='dark' text='white'>
            <Card.Img variant="top" src={require('../assets/women.jpg')} style={{height:'18rem'}} />
            <Card.ImgOverlay>
              <Card.Title>Women</Card.Title>
            </Card.ImgOverlay>
            <Card.Body as={ButtonGroup}>
              <Button variant="dark" onClick={()=>navigate("/products/women")} className="text-white">
                Explore
              </Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card bg='dark' text='white' >
            <Card.Img variant="top" src={require('../assets/dumbells.jpg')} style={{height:'18rem'}} />
            <Card.ImgOverlay>
              <Card.Title>Accessories</Card.Title>
            </Card.ImgOverlay>
            <Card.Body as={ButtonGroup}>
              <Button variant="dark" onClick={()=>navigate("/products/accessories")} className="text-white">
                Explore
              </Button>
            </Card.Body>
          </Card>
          </Col>
          </Row>
        </Stack>
      </Container>
    </>
  )
}

const Offers = ()=>{
  return(
    <>
    </>
  )
}