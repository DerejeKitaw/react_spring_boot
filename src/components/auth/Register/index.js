import React, { Component } from 'react';
import classnames from 'classnames';
import { registerUser } from '../../../store/actions/authActions';
import { connect } from 'react-redux';

class index extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">
            Create your account here
            </p>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.firstName
                })}
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.lastName
                })}
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })}
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password
                })}
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.password2
                })}
                placeholder="password2"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && (
                <div className="invalid-feedback">{errors.password2}</div>
              )}
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4"/>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, {registerUser})(index);
