import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/';
import {
  Spinner,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from 'reactstrap';
class Cuponera extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const items = this.props.items;

    if (!items) {
      return (
        <div>
          <Spinner color="success" />
        </div>
      );
    } else {
      return (
        <div>
          {items.map((item, index) => (
            <ListGroup key={index}>
              <ListGroupItem>
                <input type="checkbox" />
                <h3>Cupon: {item.name}</h3>
                <ListGroupItemText>
                  Descripcion: {item.description}
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          ))}
          {console.log(items)}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    items: state.rootReducer.items,
  };
}

export default connect(
  mapStateToProps,
  { getData },
)(Cuponera);
