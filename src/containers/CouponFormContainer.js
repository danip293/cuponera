import React, { Component } from 'react';
import { formValueSelector } from 'redux-form';
import { provideHooks } from 'redial';

// Csss
import '../App.css';

import { AddCoupons } from '../actions/coupons';
import { CouponForm } from '../componets/CouponForm';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { retriveCoupon, updateCoupon } from '../actions/coupons';

class CouponFormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      retriveCoupon,
    } = this.props;
    if (id) {
      console.log(id);
      retriveCoupon(id);
    }
  }

  handleSubmit(values) {
    const {
      AddCoupons,
      updateCoupon,
      match: {
        params: { id },
      },
    } = this.props;
    if (id) {
      return updateCoupon(id, values);
    }
    return AddCoupons(values);
  }
  render() {
    const { discountPercenatage, initialValues, readOnly } = this.props;

    return (
      <Container>
        <CouponForm
          onSubmit={this.handleSubmit}
          discountPercenatage={discountPercenatage}
          initialValues={initialValues}
          readOnly={readOnly}
        />
      </Container>
    );
  }
}

const selector = formValueSelector('contact');
const mapStateToProps = (readOnly, asDetail) => state => {
  const obj = {
    discountPercenatage: selector(state, 'porcentaje_descuento'),
    readOnly,
  };

  if (asDetail) {
    obj.initialValues = state.rootReducer.coupon;
  }
  return obj;
};

const CouponsFactory = (readOnly, asDetail) =>
  connect(
    mapStateToProps(readOnly, asDetail),
    dispatch => {
      return {
        AddCoupons: val => dispatch(AddCoupons(val)),
        retriveCoupon: id => dispatch(retriveCoupon(id)),
        updateCoupon: (id, json) => dispatch(updateCoupon(id, json)),
      };
    },
  )(CouponFormComponent);

export const CouponFormContainer = CouponsFactory(false, false);
export const DetailCouponContainer = CouponsFactory(true, true);
export const UpdateCouponContainer = CouponsFactory(false, true);
