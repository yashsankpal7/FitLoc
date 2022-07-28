import React,{useState} from 'react'
import { Container, Table, Modal, Button, Card, Row ,Col} from 'react-bootstrap';

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
      <div className="About">
        <div className="text-light text-center display-4"> <span className="text-primary display-2">#United</span> we Stand. </div>
        <Table bordered className="About-Table" responsive="md"> 
          <tbody>
            <tr className="About-Row ">
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Outdoor</h4>
                <h5 className="text-center">Sports</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Steve </h4> <h5 className="text-center"> Rogers</h5>
              </td>
                <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Mark </h4> <h5 className="text-center"> Spencer</h5>
              </td>
                <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom</h4> <h5 className="text-center"> Hiddleston</h5>
              </td>
                <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom </h4> <h5 className="text-center">Holland</h5>
              </td>
                <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Natasha</h4> <h5 className="text-center"> Romanoff</h5>
              </td>
                <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Marco</h4> <h5 className="text-center"> Polo</h5>
              </td>
            </tr>
            <tr className="About-Row">
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Marco</h4> <h5 className="text-center"> Polo</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Running &</h4>
                <h5 className="text-center">Walking</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Natasha</h4> <h5 className="text-center"> Romanoff</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom </h4> <h5 className="text-center">Holland</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom</h4> <h5 className="text-center"> Hiddleston</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Mark </h4> <h5 className="text-center"> Spencer</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Steve </h4> <h5 className="text-center"> Rogers</h5>
              </td>
            </tr>
            <tr className="About-Row">
                <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Mark </h4> <h5 className="text-center"> Spencer</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Steve </h4> <h5 className="text-center"> Rogers</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Fitness</h4>
                <h5 className="text-center">Sports</h5>
              </td>

              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom </h4> <h5 className="text-center">Holland</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Natasha</h4> <h5 className="text-center"> Romanoff</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom</h4> <h5 className="text-center"> Hiddleston</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Marco</h4> <h5 className="text-center"> Polo</h5>
              </td>
            </tr>
            <tr className="About-Row">
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Natasha</h4> <h5 className="text-center"> Romanoff</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Marco</h4> <h5 className="text-center"> Polo</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom </h4> <h5 className="text-center">Holland</h5>
              </td>

              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Team</h4>
                <h5 className="text-center">Sports</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Steve </h4> <h5 className="text-center"> Rogers</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Mark </h4> <h5 className="text-center"> Spencer</h5>
              </td>
              <td className='align-middle text-light About-Text' onClick={handleShow}>
                <h4 className="text-center">Tom</h4> <h5 className="text-center"> Hiddleston</h5>
              </td>
            </tr>
          </tbody>
        </Table>
        <Modal_ show={show} onHide={handleClose} />
      </div>
    </>
  )
}

export default About

const Modal_ = ({show,onHide})=>{
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
              <Card.Img variant="top" src={require('../assets/human1.jpg')} style={{height:'25rem'}} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className="display-6"> Marco Polo</Card.Title>
                <Card.Text className="mt-3">
                "It was a cold grey day in late November. The weather had changed overnight, when a backing wind brought a granite sky and a mizzling rain with it, and although it was now only a little after two o'clock in the afternoon the pallor of a winter evening seemed to have closed upon the hills, cloaking them in mist."
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
      
        </Card>


    </Modal>
    </>
  )
}