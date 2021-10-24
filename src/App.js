import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/StaffListComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import dateFormat from 'dateformat';
import { Collapse, Button, CardBody, Card } from 'reactstrap';




class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return <div className="container-fluid">
      <Navbar dark color="primary">
        <NavbarBrand>
          <h1 className="text-center">Ứng dụng quản lý nhân sự v1.0</h1>
        </NavbarBrand>
      </Navbar>
      <Menu />
      <dateformat />
    </div>
  }
}

export default App;
