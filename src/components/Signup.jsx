import React, {Component} from 'react';
import './signup.css';

class Signup extends Component {
    render(){
        return (
            <div className="signup">
                <span>Username</span>
                <input />
                <span>Password</span>
                <input />
                <span>RePassword</span>
                <input />
                <button>Submit</button>
            </div>
        );
    }
}

export default Signup;