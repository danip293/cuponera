import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { CouponFormContainer } from './containers/CouponFormContainer';
import CouponList from './containers/Cuponera';
import { QrReaderContainer } from './containers/QrReaderContainer';
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
                <Link to="/administrar_cupones">Lista de cupones</Link>
              </NavItem>
              <NavItem>
                <Link to="/detallesCupon">Detalles del cupón</Link>
              </NavItem>
              <NavItem>
                <Link to="/lectorQR">lectorQR</Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/crear_cupon" component={CouponFormContainer} />
          <Route path="/administrar_cupones" component={CouponList} />
          <Route path="/lectorQR" component={QrReaderContainer} />
          {/*<Route path="/detail/:id" component={} />*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
