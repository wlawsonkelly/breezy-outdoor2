import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  
  render() {
    return (
        <div className="custom-container">        
        <nav className="navbar navbar-expand-lg custom-nav">
            <a className="navbar-brand">Breezy Outdoor</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse custom-navbar" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto topnav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Past Campaigns</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Your Inventory</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item logout-nav-li">
                        <a className="nav-link" href="#">Logout</a>                    
                    </li>
                </ul>
            </div> 
        </nav>
    </div>

 
    );
  }
}

export default Nav;