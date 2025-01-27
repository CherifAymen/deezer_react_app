import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/Fire';
import './Login.css';
import swal from 'sweetalert';


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      swal({
          title: "Oops...",
          text: "Email or Password incorrect",
          icon: "error"
      });
      console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
      swal({
          title: "Oops...",
          text: "Email already in use",
          icon: "error"
      });
        console.log(error);
      })
  }
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">

            <form className="login100-form validate-form" style={{marginBottom: '80px'}}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Deezer.svg/1200px-Deezer.svg.png" width="100%" style={{marginBottom: '100px'}} alt="logo"/>

                  <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20">
                    <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="input100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <span className="focus-input100"></span>
                  </div>
                  <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20">
                    <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="input100" id="exampleInputPassword1" placeholder="Password" />
                    <span className="focus-input100"></span>
                  </div>
                  <div className="container-login100-form-btn">
                    <button type="submit" onClick={this.login} className="login100-form-btn">Login</button>
                  </div>
                  <div className="container-login100-form-btn">
                    <button onClick={this.signup} style={{marginTop: '25px'}} className="login100-form-btn">Signup</button>
                  </div>
            </form>

            <div className="login100-more toto"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
