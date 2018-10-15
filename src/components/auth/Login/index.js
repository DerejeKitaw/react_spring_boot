import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loginUser } from '../../../store/actions/authActions';

class index extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('./home');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    //console.log(userData);
    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your login account</p>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={classnames('form-control form-control-lg', {
                    'is-valid': errors.email
                  })}
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className={classnames('form-control form-control-lg', {
                    'is-valid': errors.password
                  })}
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Password Address"
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { loginUser }
)(index);
