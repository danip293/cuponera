import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { CouponFormContainer } from './containers/CouponFormContainer';
import Cuponera from './containers/Cuponera';
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              {' '}
              <img src={logo} className="App-logo" alt="logo" />
              reactstrap
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/crear_cupon"> Crear Cupon </Link>
              </NavItem>
              <NavItem>
                <Link to="/administrar_cupones">Cuponera</Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/crear_cupon" component={CouponFormContainer} />
          <Route path="/administrar_cupones" component={Cuponera} />
        </div>
      </Router>
    </div>
  );
}

export default App;
