import React, {Component} from 'react';
import SelectCardTypeModal from './SelectCardTypeModal'
import SearchCardTitle from './SearchCardTitleModal';

class CreateCard extends Component {
  state = {
    cardType: ''
  }

  selectCardType          = React.createRef();
  searchCardTitle         = React.createRef();
  openCardTypeModal       = () => this.selectCardType.current.handleShow();
  onSetCardType           = (cardType) => {
                                    this.setState({cardType: cardType})
                                    this.searchCardTitle.current.handleShow(cardType);
                                  };

  render(){
    return(
      <>
        <SelectCardTypeModal ref={this.selectCardType} onSelectCardType={(cardType) => this.onSetCardType(cardType)} />
        <SearchCardTitle ref={this.searchCardTitle} />
      </>
    );
  }

};

export default CreateCard;