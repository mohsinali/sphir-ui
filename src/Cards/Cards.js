import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import {iconShare, iconComment, iconDotsV} from '../icons/Icons';
import './Cards.css';

// const logo = require('../icons/share.svg');

class Cards extends Component {
  render(){
    return (
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
            <img alt="Dots" src={iconDotsV} className="icon" />
            <img alt="Share" src={iconShare} className="icon" />
            <img alt="Comment" src={iconComment} className="icon" />
          </Card.Footer>
        </Card>

        <Card className="card-item-large">
          <Card.Img variant="top" src="https://picsum.photos/300/200?random=2" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
          </Card.Footer>
        </Card>

      </>
    );
  }
}

export default Cards;