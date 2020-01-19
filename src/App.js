import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.png';
import Login from "./login-component.js";
// import Footer from "./footer.js";
// import { logDOM } from '@testing-library/dom';


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <img src={logo} style={{width:80, marginTop: 0}}></img>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Hotel Management System</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
          </Switch>
          
        </div>
        <div className="footer">© Hotel Management System 2019. All rights reserved.</div>
      </div>
    </div>
    
    </Router>
  );
}

export default App;