import React, {useRef} from 'react';
import SelectCardTypeModal from './SelectCardTypeModal'

const CreateCard = React.forwardRef((props, ref) => {
  const selectCardType = useRef()
  const openCardTypeModal = () => selectCardType.current.handleShow();
  ref.current = { openCardTypeModal };
  
  return(
    <>
      <SelectCardTypeModal ref={selectCardType} />
    </>
  );
});

export default CreateCard;