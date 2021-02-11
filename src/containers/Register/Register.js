import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";
import "./Register.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("register");
    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="RegisterContainer">
        <form className="RegisterForm" onSubmit={this.handleSubmit}>
          <label className="RegisterLabel">Name</label>
          <input
            className="RegisterInput"
            type="name"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <label className="RegisterLabel">Email</label>
          <input
            className="RegisterInput"
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <label className="RegisterLabel">Password</label>
          <input
            className="RegisterInput"
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button className="RegisterBtn">Register</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(Register);
