import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {logoutUser} from '../../../store/actions/authActions';
import { connect } from 'react-redux';
class index extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log("isAuthenticated", isAuthenticated);
    console.log("user", user);
    const authLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/logout"
          onClick={this.onLogoutClick.bind(this)}
          >
            Logout</Link>
        </li>
      </ul>
    );
    const guestLink = (
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
            {isAuthenticated? authLink:guestLink}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth:state.auth
})
export default connect(mapStateToProps,{logoutUser})(index);
