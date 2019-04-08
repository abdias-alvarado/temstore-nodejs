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

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Inner-app">
          <Catalogo />
        </div>
      </div>
    );
  }
}

export default App;
