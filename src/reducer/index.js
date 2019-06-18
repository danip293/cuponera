// import { MOSTRAR, ADDCUPON } from '../actions-type/';
import { DELETE_COUPON, ADDCUPON, LIST_COUPONS } from '../actions/coupons';

const initialState = {
  coupons: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_COUPONS:
      return Object.assign({}, state, {
        ...state,
        coupons: action.payload,
      });

    case ADDCUPON:
      return Object.assign({}, state, {
        ...state,
        coupons: action.payload,
      });
    case DELETE_COUPON:
      return Object.assign({}, state, { ...state });
  }

  return state;
}

export default rootReducer;
