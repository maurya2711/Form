import React, { Component } from "react";

export default class Form1 extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      passwordError: false,
      submit: false,
    };
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  firstNameHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      passwordError: false,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.firstName === "") this.setState({ firstNameError: true });
    if (this.state.lastName === "") this.setState({ lastNameError: true });
    if (this.state.email === "") this.setState({ emailError: true });
    if (this.state.password === "") this.setState({ passwordError: true });
    this.setState({ submit: true });
  };
  render() {
    return (
      <div>
        <form className="Form">
          <div>
            {console.log(this.state)}
            <p> Enter you First name </p>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              autocomplete="off"
              onChange={this.firstNameHandler}
            />
            {this.state.firstNameError && <span>This is mandatory</span>}
          </div>

          <div>
            <p>Enter your Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              autocomplete="off"
              onChange={this.firstNameHandler}
            />
            {this.state.lastNameError && <span>This is mandatory</span>}
          </div>

          <div>
            <p>Enter Email Address</p>
            <input
              type="email"
              placeholder="E-mail ID"
              name="email"
              value={this.state.email}
              autoComplete="off"
              onChange={this.firstNameHandler}
            />
            {this.state.emailError && <span>This is mandatory</span>}
          </div>

          <div>
            <p>Enter Password</p>
            <input
              type="Password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              autoComplete="off"
              onChange={this.firstNameHandler}
            />
            {this.state.passwordError && <span>This is mandatory</span>}
          </div>
          <div>
            <button type="Submit" name="btn" onClick={this.submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
