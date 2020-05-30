import React, {useState, Component} from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class SearchCardTitleModal extends Component {
  state = {
    show: false,
    cardType: ''
  }
  
  handleClose = () => this.setState({show: false});
  handleShow = (cardType) => {
                      this.setState({show: true, cardType: cardType});
                    }
  render(){
    return (
      <>
        <Modal dialogClassName="modal-50w" centered="true" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.cardType}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Fields
          </Modal.Body>
          
        </Modal>
      </>
    );
  }
};

export default SearchCardTitleModal;
