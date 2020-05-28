import React, {useState} from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

const SearchCardTitleModal = React.forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [cardType, setCardType] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (cardType) => {
                      setShow(true);
                      setCardType(cardType);
                    }
  
  ref.current = { handleShow }

  return (
    <>
      <Modal dialogClassName="modal-50w" centered="true" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fields
        </Modal.Body>
        
      </Modal>
    </>
  );
});

export default SearchCardTitleModal;
