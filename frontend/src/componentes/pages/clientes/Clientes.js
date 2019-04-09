import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from './../../generics/header/Header';
import Footer from './../../generics/footer/Footer';

import "./clientes.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';



function CardClientes(props){            
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
                    <p className="pull-left"><b>RTN: </b> {props.rtn}</p>
                    <p className="pull-left"><b>Telefono: </b> {props.telefono}</p>
                    <p className="pull-left"><b>Edad: </b> L.{props.edad}</p>
                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
      
    </div>
    );
}

class Clientes extends Component {
    constructor(){
        super();
        this.state = {
          Clientes:[],
          isLoading: false,
          error: false,
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    componentDidMount(){
        this.setState({isLoading:true});
        axios.get('/api/clientes')
          .then( (resp)=>{
            this.setState({Clientes:resp.data, isLoading:false});
          })
          .catch( (err)=>{
            alert(err);
          })
        ;
    }
    
    render() {
        let listItems = [];
        if(this.state.Clientes.length > 0 ){
            listItems = this.state.Clientes.map((o, i)=>{
                return (
                <div>
                    <CardClientes {...o} /> 
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
                    <h3><b>Clientes</b></h3>
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
        let idcliente = e.target.getAttribute('data-id');
        let accion = e.target.name;

        if (accion == "borrar")
        {
            axios.delete(`/api/clientes/eliminar/${idcliente}`)
            .then((resp)=>{
                window.location = '/clientes';          
            }).catch( (err) => {
                alert(err);
            } );
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
};
export default Clientes;