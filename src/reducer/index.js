// import { MOSTRAR, ADDCUPON } from '../actions-type/';
import {
  DELETE_COUPON,
  ADDCUPON,
  LIST_COUPONS,
  RETRIVE_COUPON,
} from '../actions/coupons';

const initialState = {
  coupons: [],
  coupon: {},
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
    case RETRIVE_COUPON:
      return Object.assign({}, state, { ...state, coupon: action.payload });
    default:
      return state;
  }
}

export default rootReducer;
