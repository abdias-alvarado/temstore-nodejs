import React, { Component } from 'react';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';


import Login from './componentes/pages/login/Login';
import Catalogo from './componentes/pages/catalogo/Catalogo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Inner-app">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
