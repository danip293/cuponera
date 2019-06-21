import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Collapse } from 'reactstrap';
import QRCode from 'qrcode.react';
import { CouponItemComponent } from '../componets/CouponItemComponent';

import { retriveCoupon } from '../actions/coupons';

export class CouponPublicDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      dispatch,
    } = this.props;
    if (id) {
      dispatch(retriveCoupon(id));
    }
  }

  render() {
    const { coupon } = this.props;
    return (
      <Container>
        <h1>Detalle publico del cupon</h1>
        <Row>
          <Col xs="4" sm="4" lg="4">
            <CouponItemComponent item={coupon} showNameDescription={false} />
            <hr />
            redes sociales
            <hr />
            mapa
          </Col>
          <Col xs="8" sm="8" lg="8">
            <h2>{coupon.name}</h2>
            <hr />
            <p>{coupon.description}</p>
            <hr />
            <p>{coupon.terms_of_user}</p>
            <hr />
            <div>
              <strong>Usos por usuario:{coupon.uses_per_user}</strong>
            </div>
            <div>
              <strong>Total de cupones:{coupon.total_coupons}</strong>
            </div>
            <div>
              <strong>Total de cupones restantes:{coupon.total_uses}</strong>
            </div>

            <Button color="success" onClick={this.toggle}>
              usar cupon
            </Button>
            <Collapse isOpen={this.state.collapse}>
              <QRCode size="400" value="x" />
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

const selector = state => ({
  coupon: state.rootReducer.coupon,
});
export const CouponPublicDetail = connect(
  selector,
  dispatch => ({
    dispatch,
  }),
)(CouponPublicDetailComponent);
