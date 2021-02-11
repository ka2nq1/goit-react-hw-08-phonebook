import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import "./Login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="LoginContainer">
        <form className="Login-form" onSubmit={this.handleSubmit}>
          <label className="LoginLabel">Email</label>
          <input
            className="LoginInput"
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <label className="LoginLabel">Password</label>
          <input
            className="LoginInput"
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button className="LoginBtn">LogIn</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onLogin: authOperations.logIn })(Login);
