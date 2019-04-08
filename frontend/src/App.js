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
      <Router>
        <div className="App">
            <Route path="/" exact component={Home}/>
            <Route path="/login"  render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
            <PrivateRoute path="/catalogo" component={Catalogo} auth={this.state}/>
    
        </div>
      </Router>
    );
  }
}

export default App;
