<<<<<<< HEAD
=======
/*empezando carretilla */


>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import Header from './../../generics/header/Header';
import Footer from './../../generics/footer/Footer';
<<<<<<< HEAD
import DataTable from 'react-data-table-component';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import FloatingButton from '../../generics/addbutton/FloatingButton';

import "./Carrito.css";

const columns = [
  {
    name: 'Nombre',
    selector: 'nombre',
    sortable: true,
  },
  {
    name: 'Descripcion',
    selector: 'descripcion',
    sortable: true,
    right: true,
  },
  {
    name: 'Categoria',
    selector: 'categoria',
    sortable: true,
    right: true,
  },
  {
    name: 'Precio',
    selector: 'precio',
    sortable: true,
    right: true,
  },
];

const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };



=======


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
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315

class Carrito extends Component {
    constructor(){
        super();
        this.state = {
<<<<<<< HEAD
          carrito:[],
          isLoading: false,
          error: false,
          show: false,
          suma: 0.00
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);

=======
          productos:[],
          isLoading: false,
          error: false,
        }
        this.onClickHandler = this.onClickHandler.bind(this);
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
    }
    componentDidMount(){
        this.setState({isLoading:true});
        axios.get('/api/productos')
          .then( (resp)=>{
<<<<<<< HEAD
            this.setState({carrito:resp.data, isLoading:false});
=======
            this.setState({productos:resp.data, isLoading:false});
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
          })
          .catch( (err)=>{
            alert(err);
          })
        ;
    }
    
    render() {
<<<<<<< HEAD
=======
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
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
        return (
            <div>
                <Header/>
                <div>
<<<<<<< HEAD
                    <h3><b>Carrito</b></h3>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <DataTable
                            columns={columns}
                            data={this.state.carrito}
                            selectableRows // add for checkbox selection
                            onTableUpdate={handleChange}
                        />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h5 className="mr-5" align="right">Total: L.<span>{this.state.suma}</span></h5>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                { (this.state.isLoading)? "<div className='bouncingLoader'></div>": null }

                
                
                <Footer/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Está seguro que desea eliminar el producto?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="default" onClick={this.handleClose}>
                        Cancelar
                        </Button>
                        <Button variant="danger" onClick={this.onClickHandler}>
                        Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>         
=======
                    <h3><b>Catálogo</b></h3>
                </div>
                <div>
                    {listItems}
                </div>
                { (this.state.isLoading)? "...Cargando": null }
                
                <Footer/>         
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
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
<<<<<<< HEAD
                window.location = '/catalogo';          
=======
                window.location = '/carrito';          
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
            }).catch( (err) => {
                alert(err);
            } );
        }
<<<<<<< HEAD
       
    };

    handleClose() {
        this.setState({ show: false });
    }

    
};
export default Carrito;


=======

       
    };
};
export default Carrito;
>>>>>>> e87ca24c7ab1a7c936137e5b85a42b8974793315
