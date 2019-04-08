import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import logo from '../../../images/logo.jpeg';
import "./Login.css";

class Login extends Component {
    constructor(){
        super();
        this.state = {
            "txtUser": "",
            "txtPwd": ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    render() {
    return (
        <form>
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
            name="txtUser"
            onChange={(e) => { this.onChangeHandler(e) }}
            />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
            Contraseña
            </label>
            <input
            type="password"
            id="defaultFormLoginPasswordEx"
            className="form-control"
            name="txtPwd"
            onChange={(e) => { this.onChangeHandler(e) }}
            />
            <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Ingresar</MDBBtn>
            </div>
        </form>
    );
    };
    onChangeHandler(e){
        const { name, value } = e.currentTarget;
        this.setState({...this.state, [name]:value});
    }
};
export default Login;
