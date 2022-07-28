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
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>                
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="Men" title="Men" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
          <Tab.Container transition>
              <Row>
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>                
              </Row>
            </Tab.Container>          </Tab>
          <Tab eventKey="Women" title="Women" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>                
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="Kids" title="Kids" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>                
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="Sport Accessories" title="Sport Accessories" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>                
              </Row>
            </Tab.Container>
          </Tab>
          <Tab eventKey="Gym Activewear & Equipment" title="Gym Activewear & Equipment" className="text-white p-2" tabClassName="btn-dark mt-1 text-white me-2">
            <Tab.Container transition>
              <Row>
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                    Wildlife Watching
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                    Skiing and Snowboarding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>  
                <Col>
                  <Row>
                    <h4>
                      Outdoor Sports
                    </h4> 
                  </Row>
                  <Row>
                    <h7>
                      Hiking and Trekking
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Rock Climbing & Mountaineering
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Fishing
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Horse Riding
                    </h7>
                  </Row>
                  <Row>
                    <h7>
                      Kites
                    </h7>
                  </Row>
                </Col>                
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