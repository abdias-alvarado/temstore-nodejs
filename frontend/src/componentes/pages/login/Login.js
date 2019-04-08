import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import logo from '../../../images/logo.png';
import "./Login.css";
import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            "email": "",
            "password": ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    render() {
    return (
        <div>
            <br/>
            <img src={logo} alt="Logo" width="100px"></img>
            <h2>TEM STORE HN</h2>
            <br/>
            <br/>  
            <h4 className="font-fix-header">Iniciar sesión</h4>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
            Usuario
            </label>
            <input
            type="email"
            id="defaultFormLoginEmailEx"
            className="form-control"
            name="email"
            onChange={(e) => { this.onChangeHandler(e) }}
            />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Contraseña
            </label>
            <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control"
            name="password"
            onChange={(e) => { this.onChangeHandler(e) }}
            />
            <div className="text-center mt-4">
                <MDBBtn onClick={(e) => { this.onClickHandler(e); }} color="indigo" type="submit">Ingresar</MDBBtn>
            </div>
        </div>
    );
    };

    onChangeHandler(e){
        const { name, value } = e.currentTarget;
        this.setState({...this.state, [name]:value});
    };

    onClickHandler(e){
        axios.post('/api/usuarios/login',
        {...this.state}).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    };
};
export default Login;
