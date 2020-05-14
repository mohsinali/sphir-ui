import React, {Component} from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';
import {iconShare, iconComment, iconDotsV} from '../icons/Icons';

class CardItemLarge extends Component {

  dotsMenu = React.forwardRef(({ children, onClick }, ref) => (
    <a href="" ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  renderThreeDotsMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={this.dotsMenu} variant="success" id="dropdown-basic">
          <img alt="Dots" src={iconDotsV} className="icon" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Flag this post</Dropdown.Item>                
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  

  
  render(){
    return(
      <>
        <Card className="card-item-large">
          <Card.Img variant="top" src="https://picsum.photos/350/250?random=1" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            
            {this.renderThreeDotsMenu()}

            <img alt="Share" src={iconShare} className="icon" />
            <img alt="Comment" src={iconComment} className="icon" />

          </Card.Footer>
        </Card>
      </>
    )
  }
}

export default CardItemLarge;