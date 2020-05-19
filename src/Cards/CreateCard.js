import React, {useEffect, useRef} from 'react';
import SelectCardTypeModal from './SelectCardTypeModal'

const CreateCard = (props) => {
  const cal = useRef()
  
  useEffect(() => {
    console.log(props);
    if(props.openSelectCardType){
      cal.current.handleShow();
    }
  });
  
  return(
    <>
      <SelectCardTypeModal ref={cal} />
    </>
  );
}

export default CreateCard;