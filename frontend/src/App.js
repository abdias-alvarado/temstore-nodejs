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

<<<<<<< HEAD
=======

>>>>>>> 76074c0281ea12331f83b4850f40a4f9655aa98e
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
<<<<<<< HEAD
      <Router>
        <div className="App">
            <Route path="/" exact render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)}/>
            <Route path="/login"  render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
            <PrivateRoute path="/catalogo" component={Catalogo} auth={this.state}/>
            <Route path="/salir"  render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
    
        </div>
      </Router>
=======
      <div className="App">
        <Router>
          <div className="Inner-app">
              <Route path="/" exact render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)}/>
              <Route path="/login"  render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
              <PrivateRoute path="/catalogo" component={Catalogo} auth={this.state}/>
              <Route path="/salir"  render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)} />
      
          </div>
        </Router>
      </div>
>>>>>>> 76074c0281ea12331f83b4850f40a4f9655aa98e
    );
  }
}

export default App;
