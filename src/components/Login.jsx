import React, {Component} from 'react';
import './login.css';
//import PropTypes from "prop-types";
import { atx_login} from '../actions/actions'
import { connect } from "react-redux";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }   
    }
    onChangeUsername = e => {
        this.setState({
          username: e.target.value
        })
        console.log(e.target.value);
    }
    onChangePassword = e => {
        this.setState({
          password: e.target.value
        })
        console.log(e.target.value);
    }
    submit = () => {
        console.log("user33:" + this.state.username + "--pass: "+ this.state.password);
        this.props.atx_login(this.state.username, this.state.password);
    }
    render(){
        return (
            <div className="login">
                <span>Username</span>
                <input 
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                />
                <span>Password</span>
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                />
                <button 
                   onClick={this.submit}
                    >Submit</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        atx_login: (username,password) => dispatch(atx_login(username,password)),
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Login);