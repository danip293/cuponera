import { MOSTRAR, ADDCUPON } from '../actions-type/';

const initialState = {
  items: [],
  cupones: [],
};
function rootReducer(state = initialState, action) {
  if (action.type === MOSTRAR) {
    return Object.assign({}, state, {
      ...state,
      items: action.payload,
    });
  }

  if (action.type === ADDCUPON) {
    return Object.assign({}, state, {
      ...state,
      cupones: action.payload,
    });
  }
  return state;
}

export default rootReducer;
