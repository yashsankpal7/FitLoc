import React , {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { Image, Container, Row, Col, Stack, Form, Card, Badge, Placeholder, Button, Breadcrumb } from 'react-bootstrap';
import { faker } from "@faker-js/faker";

import men_ from '../assets/men_.jpg'
import women_ from '../assets/women_.jpg'
import accessories_ from '../assets/accessories_.jpg'
import run_ from '../assets/run_.jpg'

const Image_ = {
  "men":men_,
  "women":women_,
  "accesories":accessories_,
  "run":run_
}

const Products = () => {
  const { typeValue } = useParams();
  const [productData,setproductData] = useState(0)
  const [type, setType] = useState({
    selected : '',
    status: false
  })

  useEffect(() => {
    
    const data = async () =>{
      let data =  await new Array(18).fill().map((e,i)=>{
        return {
          productName:faker.commerce.productName(),
          description:faker.commerce.productDescription(),
          price:faker.commerce.price()
        }
      })
  
      setproductData(data)
    }

    if(productData === 0) setTimeout(()=>data(),3000)

  }, [productData,type])
  




  return (
    <>
      <Stack>
        <div className='Product'
          style={{backgroundImage:`url(${Image_[typeValue]})`}}
        >
          <Container fluid>
            <Breadcrumb>
              <Breadcrumb.Item className="text-white fst-italic" active> HOME </Breadcrumb.Item>
              <Breadcrumb.Item active className="text-white fst-italic"> {typeValue.toUpperCase()} </Breadcrumb.Item>
            </Breadcrumb>

            <div className="fw-bold display-1 fst-italic mt-5 pt-5 text-white">
              Products
            </div>
          </Container>
        </div>
        <Container fluid>
          <Row>
            <Col xs={3} className="border">
              <Container className="my-2 ps-5 pt-3 rounded border">
                <Row className="my-2">
                  <div className="fw-bold">Filters</div>
                </Row>
                <Form.Group as={Row} className="my-2 fs-6">
                  <Form.Check label="low-To-high (Price)" checked={type.selected === 'lowTohigh' ? true: false} onChange={()=>{setproductData(productData.sort(function(a,b){return a.price - b.price}));setType({selected:'lowTohigh',status:true})}}/>
                </Form.Group>
                <Form.Group as={Row} className="my-2 fs-6">
                  <Form.Check label="high-To-low (Price)" checked={type.selected === 'highTolow' ? true: false} onChange={()=>{setproductData(productData.sort(function(a,b){return b.price - a.price}));setType({selected:'highTolow',status:true})}}/>
                </Form.Group>
                <Button variant="light" as={Row} className="my-2 fs-6" onClick={()=>setType({selected:'',status:false})}>
                  Clear all
                </Button>
              </Container>
            </Col>
            <Col className="border">
              <Container className="my-2">
                <Row md={2} className="g-4">

                  {
                    productData === 0 ?
                    <>
                      {
                        Array.from({length:10}).map((_,idx)=>(
                          <Col>
                          <Card bg="dark" text="light">
                            <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                              <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                              <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            </Card.Body>
                            <Card.Footer className="text-muted">{parseInt(Math.random()*20+1)} days ago</Card.Footer>
                          </Card>
                        </Col>
                        ))
                      }
                    </>
                    :
                    <>
                      {
                        productData.map(product=>{
                        return (
                          <>
                            <Col>
                              <Card bg={"dark"} text={"light"}>
                                <Card.Body>
                                  <Card.Title>{product.productName}</Card.Title>
                                  <Card.Text>
                                    <Badge >{product.price}</Badge>
                                    <br/>
                                    {product.description}
                                  </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">{parseInt(Math.random()*20+1)} days ago</Card.Footer>
                              </Card>
                            </Col>
                          </>
                        )
                      })
                    }
                    </>
                  }

                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Stack>
    </>
  )
}

export default Products