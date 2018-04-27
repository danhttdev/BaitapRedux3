import React, {Component} from 'react';
import './login.css';

class Login extends Component {
    render(){
        return (
            <div className="login">
                <span>Username</span>
                <input />
                <span>Password</span>
                <input />
                <button>Submit</button>
            </div>
        );
    }
}

export default Login;