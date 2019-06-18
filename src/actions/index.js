import { MOSTRAR, ADDCUPON } from '../actions-type/';
export function getData() {
  return function(dispatch) {
    return fetch(
      'https://api.mlab.com/api/1/databases/cupones_descuentos_v1_prueba/collections/cupon_v1?apiKey=7N0hJ19t7vyboGPojW8evejTxlwizS-i',
    )
      .then(response => response.json())
      .then(json => {
        dispatch({ type: MOSTRAR, payload: json });
      });
  };
}

export const AddCupones = cupones => dispatch => {
  console.log(dispatch);
  const url =
    'https://api.mlab.com/api/1/databases/cupones_descuentos_v1_prueba/collections/cupon_v1?apiKey=7N0hJ19t7vyboGPojW8evejTxlwizS-i';
  const request = {
    method: 'POST',
    body: JSON.stringify(cupones),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  return fetch(url, request)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: ADDCUPON, payload: json });
    });
};
