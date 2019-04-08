import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import Login from '../../pages/login/Login';
import axios from 'axios';

class Salir extends Component {
    constructor(){
        super();
        axios.get('/api/usuarios/logout',
        {...this.state})
        .then(()=>{            
            this.props.auth.setAuthState(
            {
                "isAuthenticated": false,
                "user": null,
                "firstVerified": false
            });              
            localStorage.setItem('autorizado', false);
        });
    }

    render() {

        return (<Redirect to={'/login'} />);
        
    };

    
};
export default Salir;
