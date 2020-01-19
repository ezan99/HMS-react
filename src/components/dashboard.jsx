import React, { Component } from "react";
import logo from "./../logo.png";
import Bookings from "./bookings";
import Guests from "./guests";
import Employee from "./employee";
import Rooms from "./rooms";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

          <div className="nav-side-menu">
            <div className="brand pb-2 pt-2">
              <img src={logo} width="75" />
            </div>
            <i
              className="fa fa-bars fa-2x toggle-btn"
              data-toggle="collapse"
              data-target="#menu-content"
            ></i>

            <div className="menu-list">
              <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <Link className="nav-link" to={"/bookings"}>
                    Bookings
                  </Link>
                </li>

                <li>
                <Link className="nav-link" to={"/guests"}>
                    Guests
                  </Link>
                </li>

                <li>
                <Link className="nav-link" to={"/rooms"}>
                    Rooms
                  </Link>
                </li>

                <li>
                <Link className="nav-link" to={"/employee"}>
                    Employees
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 offset-3">
          <Switch>
            <Route exact path='/bookings' component={Bookings} />
            <Route exact path='/guests' component={Guests} />
            <Route exact path='/employee' component={Employee} />
            <Route exact path='/rooms' component={Rooms} /> 
 

          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Dashboard;
