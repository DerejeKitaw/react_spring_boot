import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class index extends Component {
  render() {
    const gustLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">
            Sign Up
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Project
          </Link>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="project">
                  Projects
                </Link>
              </li>
            </ul>
            {gustLink}
          </div>
        </div>
      </nav>
    );
  }
}
export default index;
