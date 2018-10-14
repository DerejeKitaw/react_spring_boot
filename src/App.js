import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Layout from './components/hoc/Layout';
import { BrowserRouter , Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
