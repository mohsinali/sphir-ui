import React, {useState, useEffect, useRef} from 'react';
import SelectCardTypeModal from './SelectCardTypeModal'
import SearchCardTitle from './SearchCardTitleModal';

const CreateCard = React.forwardRef((props, ref) => {
  const selectCardType          = useRef();
  const searchCardTitle         = useRef();
  const [cardType, setCardType] = useState('');
  const openCardTypeModal       = () => selectCardType.current.handleShow();

  useEffect( () => {
    if(cardType !== ''){
      searchCardTitle.current.handleShow();
    }
  });

  ref.current = { openCardTypeModal };
  
  return(
    <>
      <SelectCardTypeModal ref={selectCardType} onSelectCardType={(cardType) => setCardType(cardType)} />
      <SearchCardTitle ref={searchCardTitle} />
    </>
  );
});

export default CreateCard;