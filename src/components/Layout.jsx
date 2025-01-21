import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/styles.css';

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