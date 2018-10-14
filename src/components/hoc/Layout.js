import React, { Component } from 'react';
import Header from '../header_footer/Header';
import Footer from '../header_footer/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
