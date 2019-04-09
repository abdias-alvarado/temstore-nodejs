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



  
class Carrito extends Component {
    constructor(){
        super();
        this.state = {
          carrito:[],
          isLoading: false,
          error: false,
          show: false,
          suma: 0.00
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    componentDidMount(){
        this.setState({isLoading:true});
        axios.get('/api/productos')
          .then( (resp)=>{
            this.setState({carrito:resp.data, isLoading:false});
          })
          .catch( (err)=>{
            alert(err);
          })
        ;
    }
    
    render() {
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

    handleClose() {
        this.setState({ show: false });
    }

    
};
export default Carrito;


