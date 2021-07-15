import React from "react";
import { useState } from "react";

function Form() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  // console.log("hello");
  const firstNameHandler = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };
  // console.log(formDetails);
  const submitHandler = (e) => {
    e.preventDefault();
    if (formDetails.firstName === "") setError({ ...error, firstName: true });
    if (formDetails.lastName === "") setError({ ...error, lastName: true });
    if (formDetails.email === "") setError({ ...error, email: true });
    if (formDetails.password === "") setError({ ...error, password: true });
    setSubmit(true);
  };

  return (
    <form className="Form">
      <div>
        <p> Enter you First name </p>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formDetails.firstName}
          autocomplete="off"
          onChange={firstNameHandler}
        />
        {error.firstName && <span>This is mandatory</span>}
      </div>

      <div>
        <p>Enter your Last Name</p>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formDetails.lastName}
          autocomplete="off"
          onChange={firstNameHandler}
        />
        {error.lastName === "" && <span>This is mandatory</span>}
      </div>

      <div>
        <p>Enter Email Address</p>
        <input
          type="email"
          placeholder="E-mail ID"
          name="email"
          value={formDetails.email}
          autocomplete="off"
          onChange={firstNameHandler}
        />
        {error.email && <span>This is mandatory</span>}
      </div>

      <div>
        <p>Enter Password</p>
        <input
          type="Password"
          placeholder="Password"
          name="password"
          value={formDetails.password}
          autocomplete="off"
          onChange={firstNameHandler}
        />
        {error.password && <span>This is mandatory</span>}
      </div>
      <div>
        <button type="Submit" name="btn" onClick={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
