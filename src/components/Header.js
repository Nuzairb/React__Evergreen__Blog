import React, { Component } from 'react';
import './Header.css';
import Navbar from './Navbar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar />
        <h1 className="header-title">Evergreen</h1>
        <h5 className="header-info">Blog</h5>
      </header>
    );
  }
}

export default Header;
