import React,{useState,useEffect} from 'react'
import { Container, Table, Modal, Button, Card, Row ,Col} from 'react-bootstrap';
import { faker } from "@faker-js/faker";
import _ from "lodash";


import people1 from '../assets/people1.jpg'
import people2 from '../assets/people2.jpg'
import people3 from '../assets/people3.jpg'
import people4 from '../assets/people4.jpg'
import people5 from '../assets/people5.jpg'
import people6 from '../assets/people6.jpg'
import people7 from '../assets/people7.jpg'
import people8 from '../assets/people8.jpg'
import people9 from '../assets/people9.jpg'
import people10 from '../assets/people10.jpg'
import people11 from '../assets/people11.jpg'
import people12 from '../assets/people12.jpg'
import people13 from '../assets/people13.jpg'
import people14 from '../assets/people14.jpg'
import people15 from '../assets/people15.jpg'
import people16 from '../assets/people16.jpg'

const Image_ = {
  0:people1,
  1:people2,
  2:people3,
  3:people4,
  4:people5,
  5:people6,
  6:people7,
  7:people8,
  8:people9,
  9:people10,
  10:people11,
  11:people12,
  12:people13,
  13:people14,
  14:people15,
  15:people16
}



const About = () => {
  const [show, setShow] = useState(false);
  const [peopleData,setPeopleData] = useState(0)
  const [status,setStatus] = useState({firstName:"",lastName:"",description:"",image:""})


  const handleClose = () => setShow(false);
  const handleShow = (firstName,lastName,description,image) => {

    console.log(firstName);
    console.log(lastName);
    console.log(description);
    setShow(true);
    setStatus({
      firstName:`${firstName}`,
      lastName:`${lastName}`,
      description:`${description}`,
      image:`${image}`
    })
  }

  useEffect(() => {
    
    const data = async () =>{
      let data =  await new Array(18).fill().map((e,i)=>{
        return {
          firstName:faker.name.firstName(),
          lastName:faker.name.lastName(),
          description:faker.lorem.lines(),
          image:faker.image.avatar(true)
        }
      })
  
      setPeopleData(data)
    }

    if(peopleData === 0) data()
    console.log(status);
  }, [peopleData])
  
  return(
    <>
      <div className="About">
        <div className="text-light text-center display-4"> <span className="text-primary display-2">#United</span> we Stand. </div>
        <Table bordered className="About-Table" responsive="md"> 
          <tbody>

            {
              peopleData === 0 ? 
              <> Loading</>
              :
              <>
                <tr className="About-Row "> 
                  {
                    _.times(6,(j)=>(
                      <>
                        <Person 
                          handleShow={handleShow} 
                          firstName={peopleData[j].firstName} 
                          lastName={peopleData[j].lastName} 
                          description={peopleData[j].description} 
                          image={peopleData[j].image}/>
                      </>
                    ))
                  }
                </tr>
                <tr className="About-Row "> 
                  {
                    _.times(6,(j)=>(
                      <>
                        <Person 
                          handleShow={handleShow} 
                          firstName={peopleData[j+6].firstName} 
                          lastName={peopleData[j+6].lastName} 
                          description={peopleData[j+6].description} 
                          image={peopleData[j+6].image}/>
                      </>
                    ))
                  }
                </tr>
                <tr className="About-Row "> 
                  {
                    _.times(6,(j)=>(
                      <>
                        <Person 
                          handleShow={handleShow} 
                          firstName={peopleData[j+12].firstName} 
                          lastName={peopleData[j+12].lastName} 
                          description={peopleData[j+12].description} 
                          image={peopleData[j+12].image}/>
                      </>
                    ))
                  }
                </tr>
              </>
            }


          </tbody>
        </Table>
        <Modal_ show={show} onHide={handleClose} firstName={status.firstName} lastName={status.lastName} description={status.description} image={status.image}/>
      </div>
    </>
  )
}

export default About

const Modal_ = ({show,onHide,firstName,lastName,description,image})=>{
  return(
    <>
      <Modal
      show={show}
      onHide={onHide}
      centered
      className="border-opacity-10"
      >
        <Card bg="dark" text="light" className="About-Card">
          <Row>
            <Col className="col-md-7">
              <Card.Img variant="top" src={Image_[parseInt(Math.random()*16)]} style={{height:'25rem'}} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className="display-6"> {firstName} {lastName}</Card.Title>
                <Card.Text className="mt-3">
                  {description}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
      
        </Card>


    </Modal>
    </>
  )
}

const Person = ({handleShow,firstName,lastName,description,image})=>{
  
  return (
    <>
      <td className='align-middle text-light About-Text' onClick={()=>handleShow(firstName,lastName,description,image)}>
        <h4 className="text-center">{firstName}</h4>
        <h5 className="text-center">{lastName}</h5>
      </td>
    </>
  )
}