import React, {useState, useEffect} from 'react';

const CreateCard = (props) => {
  const [showSelectCardTypeModal, setShowSelectCardTypeModal] = useState(false);
  const handleSelectCardTypeShow  = () => setShowSelectCardTypeModal(true);
  const handleSelectCardTypeClose = () => setShowSelectCardTypeModal(false);
  
  useEffect(() => {
    if(props.openSelectCardTyp){
      console.log('Open Modal');
    }
  });
  
  return(
    <>
    </>
  );
}

export default CreateCard;