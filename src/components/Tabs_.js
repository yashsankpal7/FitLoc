import React from 'react'
import { Collapse, Container, Tabs, Tab, Row , Col} from 'react-bootstrap';
import { useState } from 'react';

const Tabss = ({open}) => {
  const [key, setKey] = useState('All Sports');

  return (
    <>
    <Collapse in={open}>
      <Container className="bg-dark" fluid>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant='pills'
          className="mb-3"
        >
          <Tab eventKey="All Sports" title="All Sports" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Men/>
              </Row>
              <Row>
                <Women/>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="Men" title="Men" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
          <Tab.Container transition>
              <Row>
                <Men/>               
              </Row>
            </Tab.Container>          </Tab>
          <Tab eventKey="Women" title="Women" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Women/>               
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="Sport Accessories" title="Sport Accessories" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Accessories/>               
              </Row>
            </Tab.Container>
          </Tab>
        </Tabs>
      </Container>
    </Collapse>
    </>
  )
}

export default Tabss



const Men = () =>{
  return(
    <>
      <Col>
        <Row>
          <h4>
            Men's Footwear
          </h4> 
        </Row>
        <Row>
          <h7>
            Men's Shoes
          </h7>
        </Row>
        <Row>
          <h7>
            Men's Sandle
          </h7>
        </Row>
        <Row>
          <h7>
          Men's Flip Flop
          </h7>
        </Row>
      </Col>  
      <Col>
        <Row>
          <h4>
            Men's Tops
          </h4> 
        </Row>
        <Row>
          <h7>
          Men's Shirts
          </h7>
        </Row>
        <Row>
          <h7>
          Men's raincoat
          </h7>
        </Row>
        <Row>
          <h7>
          Men's Jackets
          </h7>
        </Row>
        <Row>
          <h7>
          Men's Winter Jackets
          </h7>
        </Row>
      </Col>  
      <Col>
        <Row>
          <h4>
            Under 999 store
          </h4> 
        </Row>
        <Row>
          <h7>
            Shoes
          </h7>
        </Row>
        <Row>
          <h7>
            T-Shirts
          </h7>
        </Row>
        <Row>
          <h7>
            Shorts
          </h7>
        </Row>
        <Row>
          <h7>
            Trackpants
          </h7>
        </Row>
        <Row>
          <h7>
            Activewear
          </h7>
        </Row>
        <Row>
          <h7>
            Jackets
          </h7>
        </Row>
        <Row>
          <h7>
            Sunglasses
          </h7>
        </Row>
      </Col>  
    </>
  )
}

const Women = () =>{
  return(
    <>
            <Col>
        <Row>
          <h4>
            Women's Footwear
          </h4> 
        </Row>
        <Row>
          <h7>
            Women's Shoes
          </h7>
        </Row>
        <Row>
          <h7>
            Women's Sandle
          </h7>
        </Row>
        <Row>
          <h7>
          Women's Flip Flop
          </h7>
        </Row>
      </Col>  
      <Col>
        <Row>
          <h4>
            Women's Tops
          </h4> 
        </Row>
        <Row>
          <h7>
          Women's Shirts
          </h7>
        </Row>
        <Row>
          <h7>
          Women's raincoat
          </h7>
        </Row>
        <Row>
          <h7>
          Women's Jackets
          </h7>
        </Row>
        <Row>
          <h7>
          Women's Winter Jackets
          </h7>
        </Row>
      </Col>  
      <Col>
        <Row>
          <h4>
            Under 999 store
          </h4> 
        </Row>
        <Row>
          <h7>
            Shoes
          </h7>
        </Row>
        <Row>
          <h7>
            T-Shirts
          </h7>
        </Row>
        <Row>
          <h7>
            Shorts
          </h7>
        </Row>
        <Row>
          <h7>
            Trackpants
          </h7>
        </Row>
        <Row>
          <h7>
            Activewear
          </h7>
        </Row>
        <Row>
          <h7>
            Jackets
          </h7>
        </Row>
        <Row>
          <h7>
            Sunglasses
          </h7>
        </Row>
      </Col> 
    </>
  )
}

const Accessories = () =>{
  return(
    <>
      <Col>
        <Row>
          <h4>
            Bags & Backpack
          </h4> 
        </Row>
        <Row>
          <h7>
            Sports Bags
          </h7>
        </Row>
        <Row>
          <h7>
            Backpacks
          </h7>
        </Row>
        <Row>
          <h7>
            Trolley Bags
          </h7>
        </Row>
        <Row>
          <h7>
            Rain Cover
          </h7>
        </Row>
        <Row>
          <h7>
            Locks
          </h7>
        </Row>
      </Col> 
      <Col>
        <Row>
          <h4>
            Clothing accessories
          </h4> 
        </Row>
        <Row>
          <h7>
            Caps
          </h7>
        </Row>
        <Row>
          <h7>
            Socks
          </h7>
        </Row>
        <Row>
          <h7>
            Wrist and Head Bands
          </h7>
        </Row>
        <Row>
          <h7>
            Towels
          </h7>
        </Row>
        <Row>
          <h7>
            Gloves
          </h7>
        </Row>
      </Col> 
      <Col>
        <Row>
          <h4>
            Bottle & Food Storage
          </h4> 
        </Row>
        <Row>
          <h7>
            Water Bottles
          </h7>
        </Row>
        <Row>
          <h7>
            Food Box
          </h7>
        </Row>
      </Col>
      <Col>
        <Row>
          <h4>
            Camping Furniture
          </h4> 
        </Row>
        <Row>
          <h7>
            Chairs
          </h7>
        </Row>
        <Row>
          <h7>
            Tables
          </h7>
        </Row>
      </Col> 
    </>
  )
}


