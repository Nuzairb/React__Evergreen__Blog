import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navbar';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navigation />
        <h1 className="text-center text-uppercase">Evergreen</h1>
        <h5 className="text-center text-uppercase font-weight-light">Blog</h5>
      </div>
    );
  }
}

export default Header;
