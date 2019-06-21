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
  CardFooter,
  CardHeader,
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
            <Col key={item._id.$oid}>
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
                  <CardTitle>
                    <h2>{item.name}</h2>
                  </CardTitle>
                  <CardText>{item.description}</CardText>
                  <hr />
                  <Row>
                    <Col>
                      <h2>
                        <Badge color="info">
                          <strike>${item.list_price} </strike>
                        </Badge>
                      </h2>
                    </Col>
                    <Col>
                      <h2>
                        <Badge color="danger">
                          %{item.discount_percenatage}
                        </Badge>
                      </h2>
                    </Col>
                    <Col>
                      <h2>
                        <Badge color="success">
                          {item.discount_percenatage
                            ? `-${item.discount_percenatage}%`
                            : ` -${item.discount_price}$`}
                        </Badge>
                      </h2>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col style={{ textAlign: 'center' }}>
                      Empieza
                      <div>
                        <h4> {item.valid_sice}</h4>
                      </div>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                      Termina
                      <div>
                        <h4>{item.valid_until}</h4>
                      </div>
                    </Col>
                  </Row>
                </CardFooter>
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
