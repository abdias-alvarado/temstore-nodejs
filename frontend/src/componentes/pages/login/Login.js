import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';

class Login extends Component {

    render() {
    return (
        <form>
            <br />
            <br />
            <br />
            <p className="h4 text-center mb-4">Iniciar sesión</p>
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
