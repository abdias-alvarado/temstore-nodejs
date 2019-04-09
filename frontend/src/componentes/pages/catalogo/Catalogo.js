import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import Header from './../../generics/header/Header';
import Footer from './../../generics/footer/Footer';

import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import FloatingButton from '../../generics/addbutton/FloatingButton';

import "./Catalogo.css";

 
function CardProducto(props){            
    return(
    <div className="row"  key={props._id}>
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <div className="card shadow p-3 mb-5 bg-white rounded">
                <div>
                    <center>
                        <h3>{props.nombre}</h3>
                    </center>
                </div>
                <div className="detalles">
                    <p className="pull-left"><b>Descripción: </b> {props.descripcion}</p>
                    <p className="pull-left"><b>Categoría: </b> <span className="badge badge-pill badge-info">{props.categoria}</span></p>
                    <p className="pull-left"><b>Precio: </b> L.{props.precio}</p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
        </div>
      
    </div>
    );
}

class Catalogo extends Component {
    constructor(){
        super();
        this.state = {
          productos:[],
          isLoading: false,
          error: false,
          show: false
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClose = this.handleClose.bind(this);

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
                    <CardProducto {...o} /> 
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
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-md-5"></div>
                    <div className="col-md-2">
                        <button name="nuevo" className="badge badge-pill badge-success btn-new" onClick={this.onClickHandler}><i className="fas fa-plus"></i></button>
                    </div>
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
                window.location = '/catalogo';          
            }).catch( (err) => {
                alert(err);
            } );
        }
        else if (accion == "nuevo")
        {
            window.location = '/nuevoproducto';
            //this.setState({ show: true });
        }
        else if (accion == "comprar")
        {
            var qtty = parseInt(localStorage.getItem('cantidad')) + 1;
            localStorage.setItem('cantidad', qtty);
            window.location = '/catalogo';
        }


        /*
        axios.post('/api/usuarios/login',
        {...this.state}).then((resp)=>{
            alert(resp.data.msg);
            if(resp.data.msg === "Ingresado correctamente."){
              this.props.auth.setAuthState(
                {
                  "isAuthenticated": true,
                  "user": this.state.email,
                  "firstVerified": true
                }
              );
              this.setState({"redirecto": true});
            }
          }).catch( (err) => {
            alert(err);
          } );*/
          
    };

    handleClose() {
        this.setState({ show: false });
    }
};
export default Catalogo;
