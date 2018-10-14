import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div>
        Header
        <div className="container">{this.props.children}</div>
        Footer
      </div>
    );
  }
}

export default Layout;
