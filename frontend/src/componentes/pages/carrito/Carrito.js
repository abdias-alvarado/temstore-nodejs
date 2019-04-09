/* carrito */
import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import Header from './../../generics/header/Header';
import Footer from './../../generics/footer/Footer';
import DataTable from 'react-data-table-component';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import FloatingButton from '../../generics/addbutton/FloatingButton';

import "./Carrito.css";

const columns = [
    {
        name: 'Cliente',
        selector: 'cliente',
        sortable: true,
    },
    {
        name: 'Producto',
        selector: 'producto',
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
    {
        name: 'Cantidad',
        selector: 'cantidad',
        sortable: true,
        right: true,
    },
    {
        name: 'Subtotal',
        selector: 'subtotal',
        sortable: true,
        right: true,
    },
];

const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };


<<<<<<< HEAD
=======

  
>>>>>>> 2cf1847166cdbfba653fc0ab3120548fb35e135e
class Carrito extends Component {
    constructor(){
        super();
        this.state = {
          carrito:[],
          isLoading: false,
          error: false,
          show: false,
          suma: 0.00,
          cliente: 'Jorge Paz'
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    componentDidMount(){
        this.setState({isLoading:true});
        axios.get(`/api/carrito/${this.state.cliente}`)
          .then( (resp)=>{
            this.setState({carrito:resp.data, isLoading:false});
          })
          .catch( (err)=>{
            alert(err);
          })
        ;
    }
    
    render() {
        let listItems = [];
        localStorage.setItem('cantidad', this.state.carrito.length);
        if(this.state.carrito.length > 0 ){
            listItems = this.state.carrito.map((o, i)=>{
                this.state.suma = this.state.suma + o.subtotal;
            });
        }
        return (
            <div>
                <Header/>
                <div>
                    <h3><b>Carrito</b></h3>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <DataTable
                            title={this.state.cliente}
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
                        <h5 className="mr-5" align="right">Total: L.<span>{parseFloat(this.state.suma).toFixed(2)}</span></h5>
                    </div>
                    <div className="col-md-2"></div>
                </div>

                { (this.state.isLoading)? "<div className='bouncingLoader'></div>": null }

                
                
                <Footer/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Está seguro de desear eliminar el producto?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="default" onClick={this.handleClose}>
                        Cancelar
                        </Button>
                        <Button variant="danger" onClick={this.onClickHandler}>
                        Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>         
            </div>
        );
    };

    onClickHandler(e){
        e.preventDefault();
        e.stopPropagation();
        let idcarrito = e.target.getAttribute('data-id');
        let accion = e.target.name;

        if (accion == "borrar")
        {
            axios.delete(`/api/carrito/eliminar/${idcarrito}`)
            .then((resp)=>{
                window.location = '/carrito';          
            }).catch( (err) => {
                alert(err);
            } );
        }
       
    };

    handleClose() {
        this.setState({ show: false });
    }

    
};
export default Carrito;


