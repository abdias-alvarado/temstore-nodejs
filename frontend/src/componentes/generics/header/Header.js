import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import logo from '../../../images/logo.png';

import "./Header.css";

class Header extends Component {

    render() {
    return (
      <div className="row clearfix">     
          <Navbar collapseOnSelect className="header justify-content-between" expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image className="logo" width="50px" src={logo} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#"><Link className="text-white" to="clientes">Clientes</Link></Nav.Link>
              <Nav.Link href="#"><Link className="text-white" to="catalogo">Catálogo</Link></Nav.Link>
              <Nav.Link href="#"><Link className="text-white" to="carrito">Carrito</Link><span class="badge badge-light align-middle counter">0</span></Nav.Link>
              
            </Nav>
            <Nav>
                
                <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Nuevo Usuario</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Ver Carrito</NavDropdown.Item>
                  <NavDropdown.Divider />
                
                  <NavDropdown.Item href="#"><Link to="salir">Cerrar Sesión</Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
     
    </div>
    );
    };
};
export default Header;
