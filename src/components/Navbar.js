import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Newest</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Blog</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
