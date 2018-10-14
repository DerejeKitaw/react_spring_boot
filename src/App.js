import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Home from './components/Home';
import Layout from './components/hoc/Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { BrowserRouter , Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
