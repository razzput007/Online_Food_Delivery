import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";
export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let valid = true;
    const newError = {};
    let fullName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!fullName.test(credentials.name)) {
      newError["name"] = "Please enter a valid Full Name.";
      valid = false;
  
    }
  
    let emailValidation =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailValidation.test(credentials.email)) {
      newError["email"] = "Invalid Email ID";
      valid = false;
      
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(credentials.password)) {
      newError.password =
        "Password must be at least 8 characters, including at least one letter and one number.";
      valid = false;
    
    }
    if(!credentials.geolocation){
      newError.location="Required Field";
      valid=false;
    }
    setErrors(newError);
    return valid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await resp.json();
    console.log(json);
    if (!json.success) {
      alert("invalid");
    }
  };
  const handleInput = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              name="name"
              value={credentials.name}
              onChange={(e) => {
                handleInput(e);
                validateForm();
              }}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={(e)=>{
                handleInput(e);
                validateForm();
              }}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.value}
              onChange={(e)=>{
                handleInput(e);
                validateForm();
              }}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputaddress1"
              name="geolocation"
              value={credentials.value}
              onChange={(e)=>{
                handleInput(e);
                validateForm();
              }}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already Registered
          </Link>
        </form>
      </div>
    </>
  );
}
