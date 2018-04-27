import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import './container.css';
class Container extends Component {
  render() {
    return (
      <div className="container">
        <Login />
        <button>Sign up now</button>
        <Signup />
      </div>
    );
  }
}

export default Container;
