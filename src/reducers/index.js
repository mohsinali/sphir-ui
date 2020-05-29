import { combineReducers } from 'redux';

const selectedCardTypeReducer = (selectedCardType=null, action) => {
  if(action.type === 'SELECTED_CARD_TYPE'){
    return action.payload;
  }

  return selectedCardType;
};

export default combineReducers({
  selectedCardType: selectedCardTypeReducer
});