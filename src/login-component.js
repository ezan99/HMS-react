import React, { Component } from "react";
import axios from 'axios';

export default class Login extends React.Component { 
    state={
        username: '',
        password: ''
    }

    handleUsername = event => {
        this.setState({username: event.target.value});
    }

    handlepassword = event => {
        this.setState({password: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        // console.log(this.state.username + ' ' + this.state.password);

        const user = { 
            username: this.state.username,
            password: this.state.password
        };

        // axios.post('http://10.10.27.141:8000/login', { user })
        // .then (res => {
        //     console.log(res);
        // })

        axios.get('http://172.20.10.3:80/rooms')
        .then (res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })


    }

    
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h3>Admin Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="name" className="form-control" placeholder="Enter username"  onChange={this.handleUsername} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"onChange={this.handlepassword} />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-secondary btn-block">Login</button>
            
            </form>
        );
    }
}