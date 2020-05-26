import React, {useState} from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

const SelectCardTypeModal = React.forwardRef((props, ref) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  ref.current = { handleShow }

  const renderButtons = () => {
    return (
      <Container className="ctn-card-types">
        <Row>
          <Col className="d-flex justify-content-between">
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Article</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Video</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Original Scribe</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Product</Button>{' '}
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-between">
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Podcast</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Company</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Recipe</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Channel</Button>{' '}
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-between">
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Study</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Document</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Book</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Website</Button>{' '}
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-between">
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Blog Post</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Event</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">App</Button>{' '}
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Organization</Button>{' '}
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <Button className="btn-sphir btn-card-type" variant="outline-secondary" size="lg">Professional</Button>{' '}
          </Col>
        </Row>
      </Container>
    );
  }
  

  return (
    <>
      <Modal dialogClassName="modal-50w" centered="true" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Card Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderButtons()}

        </Modal.Body>
        
      </Modal>
    </>
  );
});

export default SelectCardTypeModal;
