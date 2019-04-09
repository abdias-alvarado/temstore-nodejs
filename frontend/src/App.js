import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import PrivateRoute from './componentes/generics/privateroute/PrivateRoute';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Login from './componentes/pages/login/Login';

import Catalogo from './componentes/pages/catalogo/Catalogo';
import ProductoNew from './componentes/pages/catalogo/NuevoProducto';
import EditarProducto from './componentes/pages/catalogo/EditarProducto';

import Clientes from './componentes/pages/clientes/Clientes';
import ClienteNew from './componentes/pages/clientes/NuevoCliente';
import EditarCliente from './componentes/pages/clientes/EditarCliente';

import Usuarios from './componentes/pages/usuarios/Usuarios';
import UsuarioNew from './componentes/pages/usuarios/NuevoUsuario';

import Carrito from './componentes/pages/carrito/Carrito';
import Salir from './componentes/generics/salir/Salir';


function Home() {
  return (<h1>Home</h1>);
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : false,
      user: null,
      firsVerified: false
    }
    this.setAuthState = this.setAuthState.bind(this);
  }
  setAuthState(authProps){
    this.setState(authProps);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="Inner-app">
              <Route path="/" exact render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)}/>
              <Route path="/login"  render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
              <PrivateRoute path="/catalogo" component={Catalogo} auth={this.state}/>
              <PrivateRoute path="/carrito" component={Carrito} auth={this.state}/>
              <Route path="/clientes" render={(p)=>(<Clientes {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
              <Route path="/usuarios" render={(p)=>(<Usuarios {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
              <Route path="/salir" render={(p)=>(<Salir {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
              <Route path="/editarproducto" render={(p) => (<EditarProducto {...p} auth={{...this.state, setAuthState:this.setAuthState}} />)} />
              <Route path="/editarcliente" render={(p) => (<EditarCliente {...p} auth={{...this.state, setAuthState:this.setAuthState}} />)}/>
              <Route path="/nuevoproducto" render={(p) => (<ProductoNew {...p} auth={{...this.state, setAuthState:this.setAuthState}} />)} />
              <Route path="/nuevocliente" render={(p) => (<ClienteNew {...p} auth={{...this.state, setAuthState:this.setAuthState}} />)} />          
              <Route path="/nuevousuario" render={(p) => (<UsuarioNew {...p} auth={{...this.state, setAuthState:this.setAuthState}} />)} />          

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
