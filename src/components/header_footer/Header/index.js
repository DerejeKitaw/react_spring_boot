import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class index extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
        <Link className="navbar-brand" to="/">Project</Link>
        </div>
      </nav>
    )
  }
}
export default index
