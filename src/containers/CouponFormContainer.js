import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import '../App.css';

import { AddCoupons } from '../actions/coupons';
import { CouponForm } from '../componets/CouponForm';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
class CouponFormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { AddCoupons } = this.props;
    AddCoupons(values);
  }
  render() {
    const { discountPercenatage } = this.props;

    return (
      <Container>
        <CouponForm
          onSubmit={this.handleSubmit}
          discountPercenatage={discountPercenatage}
        />
      </Container>
    );
  }
}

const selector = formValueSelector('contact');
const mapStateToProps = state => {
  return {
    discountPercenatage: selector(state, 'porcentaje_descuento'),
  };
};

export const CouponFormContainer = connect(
  mapStateToProps,
  dispatch => {
    return { AddCoupons: val => dispatch(AddCoupons(val)) };
  },
)(CouponFormComponent);
