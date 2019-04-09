import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import "./clientes.css";
import Header from '../../generics/header/Header';
import { MDBBtn } from 'mdbreact';

class nuevoProducto extends Component {
    
    constructor(){
        super();
        this.state = {
            nombre: '',
            rtn: '',
            telefono: '',
            edad: ''
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    
    render() {
        return (
            <div>
                <Header/>
                <br/>
                <h2>Nuevo Cliente</h2>
                <label htmlFor="input-nombre" className="grey-text">
                Nombre del cliente:
                </label>
                <input
                type="text"
                style={{marginLeft: 33+"%"}}
                id="input-nombre"
                className="form-control col-4"
                name="nombre"
                onChange={(e) => { this.onChangeHandler(e) }}
                />
                <label htmlFor="input-descripcion" className="grey-text">
                RTN
                </label>
                <textarea
                id="input-RTN"
                name="RTN"
                style={{marginLeft: 33+"%"}}
                className="md-textarea form-control col-4" 
                rows="3"
                onChange={(e) => { this.onChangeHandler(e) }}
                >
                </textarea>
                <label htmlFor="input-categoria" className="grey-text">
                Edad:
                </label>
                <input
                type="text"
                name="edad"
                style={{marginLeft: 33+"%"}}
                id="input-edad"
                className="form-control col-4"
                onChange={(e) => { this.onChangeHandler(e) }}
                />
                <label htmlFor="input-edad" className="grey-text">
                telefono:
                </label>
                <input
                type="number"
                name="telefono"
                style={{marginLeft: 33+"%"}}
                id="input-telefono"
                className="form-control col-4"
                onChange={(e) => { this.onChangeHandler(e) }}
                />
                <div className="text-center mt-4">
                    <MDBBtn onClick={(e) => { this.onClickHandler(e); }} color="indigo" type="submit">Guardar</MDBBtn>
                </div>
            </div>
        );
    };

    onClickHandler(e){
        if(this.state.precio === '' || this.state.nombre === '' || this.state.descripcion === '' || this.state.categoria === ''){
            console.log("verifique los campos");
            return;
        }
        axios.post('/api/productos/nuevo', {...this.state}).then(resp => {
            window.location = '/catalogo'
        }).catch(exc => { throw exc; })
    };

    onChangeHandler(e){
        const { name, value } = e.currentTarget;
        this.setState({...this.state, [name]:value});
    }
};

export default nuevoCliente;