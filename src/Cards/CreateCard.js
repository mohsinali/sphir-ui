import React, {useState, useEffect, useRef} from 'react';
import SelectCardTypeModal from './SelectCardTypeModal'
import SearchCardTitle from './SearchCardTitleModal';

const CreateCard = React.forwardRef((props, ref) => {
  const selectCardType          = useRef();
  const searchCardTitle         = useRef();
  const [cardType, setCardType] = useState('');
  const openCardTypeModal       = () => selectCardType.current.handleShow();
  const onSetCardType           = (cardType) => {
                                    setCardType(cardType);
                                    searchCardTitle.current.handleShow(cardType);
                                  };

  useEffect( () => {});

  ref.current = { openCardTypeModal };
  
  return(
    <>
      <SelectCardTypeModal ref={selectCardType} onSelectCardType={(cardType) => onSetCardType(cardType)} />
      <SearchCardTitle ref={searchCardTitle} />
    </>
  );
});

export default CreateCard;