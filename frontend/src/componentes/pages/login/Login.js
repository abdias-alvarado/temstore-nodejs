import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import logo from '../../../images/logo.jpeg';
import "./Login.css";

class Login extends Component {

    render() {
    return (
        <form>
            <div>
                <br />
                <img src={logo} alt="Logo" width="100px"></img>
                <h2>TEM STORE HN</h2>
            </div>
                <br />
                <h4 className="font-fix-header">Iniciar sesión</h4>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Usuario
                </label>
                <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                />
                <br />
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Contraseña
                </label>
                <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                />
                <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Ingresar</MDBBtn>
                </div>
        </form>
    );
    };
};
export default Login;
