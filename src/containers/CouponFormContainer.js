import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import '../App.css';

import { AddCupones } from '../actions';
import { CouponForm } from '../componets/CouponForm'
import { connect } from 'react-redux';
import { Container } from 'reactstrap'
class CouponFormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    const { AddCuponesDispatcher } = this.props
    AddCuponesDispatcher(values);
  }
  render() {
    const { discountPercenatage } = this.props

    return (
      <Container>
        <CouponForm onSubmit={this.handleSubmit} discountPercenatage={discountPercenatage} />
      </Container>

    )
  }
}

const selector = formValueSelector('contact');
const mapStateToProps = state => {
  return {
    discountPercenatage: selector(state, 'porcentaje_descuento'),
    cupones: state.rootReducer.cupones,
  };
};

export const CouponFormContainer = connect(
  mapStateToProps,
  dispatch => {
    // dispatch((...params) => console.log(params, { ...params }));
    return { AddCuponesDispatcher: val => dispatch(AddCupones(val)) };
  },
)(CouponFormComponent);
