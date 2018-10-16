import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Home from './components/Home';
import Layout from './components/hoc/Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { Provider } from 'react-redux';
import { BrowserRouter , Route} from 'react-router-dom';
import store from './store/store';
import setAuthToken from './store/utils/setAuthToken';

if (localStorage.jwtToken) {
  //console.log("localStorage: ",localStorage)
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login';
//   }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Layout>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
