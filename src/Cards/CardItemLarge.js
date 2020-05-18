import React, {useState} from 'react';
import { Card, Button, Dropdown, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
        iconShare, iconComment, iconDotsV, iconEnvelope, iconInternet, 
        iconLink, iconFacebook, iconTwitter, iconLinkedin
      } from '../icons/Icons';

const dotsMenu = React.forwardRef(({ children, onClick }, ref) => (
  <a href="" ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const renderThreeDotsMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={dotsMenu} variant="success" id="dropdown-basic">
        <img alt="Dots" src={iconDotsV} className="icon" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Flag this post</Dropdown.Item>                
      </Dropdown.Menu>
    </Dropdown>
  )
}


const CardItemLarge  = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Card className="card-item-large">
        {/* <Card.Img variant="top" src="https://picsum.photos/350/250?random=1" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          
          {renderThreeDotsMenu()}

          <img alt="Share" src={iconShare} className="icon" onClick={handleShow} />
          <img alt="Comment" src={iconComment} className="icon" />
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body className="share-modal">
        
        <ListGroup>
          <ListGroup.Item action>
            <img alt="Message a Friend in Sphir" src={iconEnvelope} className="icon margin-right-3" /> 
             Message a Friend in Sphir
          </ListGroup.Item>
          <ListGroup.Item action>
            <img alt="Message a Friend in Sphir" src={iconInternet} className="icon margin-right-3" />
            Email Link
          </ListGroup.Item>
          
          <ListGroup.Item action>
            <img alt="Message a Friend in Sphir" src={iconLink} className="icon margin-right-3" />
            <CopyToClipboard text={window.location.href}>
              <span>Copy Link</span>
            </CopyToClipboard>
        
          </ListGroup.Item>
          
          <ListGroup.Item action>
            <img alt="Message a Friend in Sphir" src={iconFacebook} className="icon margin-right-3" />
            Post on Facebook
          </ListGroup.Item>
          
          <ListGroup.Item action>
            <img alt="Message a Friend in Sphir" src={iconTwitter} className="icon margin-right-3" />
            Post on Twitter
          </ListGroup.Item>

          <ListGroup.Item action>
            <img alt="Message a Friend in Sphir" src={iconLinkedin} className="icon margin-right-3" />
            Post on LinkedIn
          </ListGroup.Item>
        </ListGroup>

        </Modal.Body>
      </Modal>

    </>
  )
}

export default CardItemLarge;