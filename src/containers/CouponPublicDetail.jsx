import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Collapse, Spinner } from 'reactstrap';
import QRCode from 'qrcode.react';
import { CouponItemComponent } from '../componets/CouponItemComponent';

import { retriveCoupon } from '../actions/coupons';

export class CouponPublicDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
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

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    const { coupon } = this.props;
   
    if (!coupon) {
      return(<Spinner color="secondary"></Spinner>)
      
    }else{
    return (
      <Container>
        <h1>Detalle publico del cupon</h1>
       {console.log(this.props.match.params.id)
       }
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
              <QRCode size="400" value={this.props.match.params.id}/>
              
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
    }
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
