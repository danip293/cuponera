import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  CouponFormContainer,
  UpdateCouponContainer,
  DetailCouponContainer,
} from './containers/CouponFormContainer';
import CouponList from './containers/Cuponera';
import { QrReaderContainer } from './containers/QrReaderContainer';
function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img src={logo} className="App-logo" alt="logo" />
              reactstrap
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/crear_cupon"> Crear Cupon </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/administrar_cupones">Lista de cupones</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/lectorQR">lectorQR</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/crear_cupon" component={CouponFormContainer} />
          <Route path="/administrar_cupones" component={CouponList} />
          <Route path="/lectorQR" component={QrReaderContainer} />
          <Route path="/detail/:id" component={DetailCouponContainer} />
          <Route path="/update/:id" component={UpdateCouponContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
