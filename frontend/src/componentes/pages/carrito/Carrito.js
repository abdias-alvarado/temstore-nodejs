/*empezando carretilla */


import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
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

import "./Carrito.css";

function CardCarrito(props){            
    return(
    <div className="row"  key={props._id}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <div className="card shadow p-3 mb-5 bg-white rounded">
                <div>
                    <center>
                        <h3>Carrito Compra</h3>
                    </center>
                </div>
                <div className="detalles">
                    <table>
                        <tr>
                            <td rowspan="5"> IMG </td>
                        </tr>
                        <tr>
                            <td className="pull-left">{props.nombre}</td>
                        </tr>
                        <tr>
                            <td className="pull-left">{props.descripcion} </td>
                        </tr>
                        <tr>
                            <td className="pull-left">{props.categoria}</td>
                        </tr>
                        <tr>
                            <td className="pull-left">L.{props.precio}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
      
    </div>
    );
}

class Carrito extends Component {
    constructor(){
        super();
        this.state = {
          productos:[],
          isLoading: false,
          error: false,
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    componentDidMount(){
        this.setState({isLoading:true});
        axios.get('/api/productos')
          .then( (resp)=>{
            this.setState({productos:resp.data, isLoading:false});
          })
          .catch( (err)=>{
            alert(err);
          })
        ;
    }
    
    render() {
        let listItems = [];
        if(this.state.productos.length > 0 ){
            listItems = this.state.productos.map((o, i)=>{
                return (
                <div>
                    <CardCarrito {...o} /> 
                    <div className="acciones">
                        <button name="editar" data-id={o._id} className="btn btn-sm btn-warning" onClick={this.onClickHandler}><i className="fas fa-pen"></i></button>
                        <button name="comprar" data-id={o._id} className="btn btn-sm btn-success" onClick={this.onClickHandler}><i className="fas fa-shopping-cart"></i></button>
                        <button name="borrar" data-id={o._id} className="btn btn-sm btn-danger" onClick={this.onClickHandler}><i className="fas fa-trash"></i></button>
                    </div>
                    <hr/>
                </div>);
            });
        }
        return (
            <div>
                <Header/>
                <div>
                    <h3><b>Catálogo</b></h3>
                </div>
                <div>
                    {listItems}
                </div>
                { (this.state.isLoading)? "...Cargando": null }
                
                <Footer/>         
            </div>
        );
    };

    onClickHandler(e){
        e.preventDefault();
        e.stopPropagation();
        let idproducto = e.target.getAttribute('data-id');
        let accion = e.target.name;

        if (accion == "borrar")
        {
            axios.delete(`/api/productos/eliminar/${idproducto}`)
            .then((resp)=>{
                window.location = '/carrito';          
            }).catch( (err) => {
                alert(err);
            } );
        }

       
    };
};
export default Carrito;
