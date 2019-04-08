import React, { Component } from 'react';
import logo from './logo.svg';


import Login from './componentes/pages/login/Login';
import Carrito from './componentes/pages/carrito/Carrito';
import Catalogo from './componentes/pages/catalogo/Catalogo';
import Clientes from './componentes/pages/clientes/Clientes';

import Header from './componentes/generics/header/Header';
import Footer from './componentes/generics/footer/Footer';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Catalogo></Catalogo>
       
      </div>
    );
  }
}

export default App;
