import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from './../../generics/header/Header';
import Footer from './../../generics/footer/Footer';


import { MDBBtn } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../images/logo.png';

import "./Clientes.css";


class Clientes extends Component {
    constructor(){
        super();
        this.state = {
          things:[],
          isLoading: false,
          error: false,
        }
    }

    render() {
    return (
        <div>
            <Header/>
            <div className="card">
                <h1>Clientes</h1>
            </div>
            
            <Footer/>         
        </div>
        

    );
    };
};
export default Clientes;
