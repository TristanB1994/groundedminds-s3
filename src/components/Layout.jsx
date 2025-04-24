import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// Global CSS should only be imported in _app.js

const Layout = ({ navOptions = {}, children }) => {
    return (
      <div className="layout">
        <NavBar {...navOptions} />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };

export default Layout;
