import React,{useState,useEffect} from 'react'
import { Container, Table, Modal, Button, Card, Row ,Col} from 'react-bootstrap';
import { faker } from "@faker-js/faker";
import _ from "lodash";

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
              <Card.Img variant="top" src={image} style={{height:'25rem'}} />
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