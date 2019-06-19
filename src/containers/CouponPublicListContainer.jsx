import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  CardImg,
  Button,
  Badge,
} from 'reactstrap';
import { connect } from 'react-redux';

import { getCouponsList } from '../actions/coupons';

class CouponPublicListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getCouponsList } = this.props;
    getCouponsList();
  }
  render() {
    const { couponsList } = this.props;
    console.log(couponsList);
    return (
      <Container>
        <h2>Listado de cupones</h2>
        <Row>
          {couponsList.map(item => (
            <Col>
              <Card>
                {item.image && (
                  <CardImg
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image cap"
                  />
                )}
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>{item.description}</CardText>
                  <Button>Hacer valido</Button>
                  <h1>
                    <Badge style={{ float: 'right' }}>
                      {item.discount_percenatage
                        ? `-${item.discount_percenatage}%`
                        : ` -${item.discount_price}$`}
                    </Badge>
                  </h1>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapState2Props = state => ({ couponsList: state.rootReducer.coupons });
const mapDispatch2Props = dispatch => ({
  getCouponsList: () => dispatch(getCouponsList()),
});
export const CouponPublicListContainer = connect(
  mapState2Props,
  mapDispatch2Props,
)(CouponPublicListComponent);
