import React, { useState } from "react";

function SignUp() {
  //access google auth
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  //access facebook auth
  const facebook = () => {
    window.open("http://localhost:3001/auth/facebook", "_self");
  };

  //access linkedin auth
  const linkedin = () => {
    window.open("http://localhost:3001/auth/linkedin", "_self");
  };
  //access github auth
  const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };

  return (
    <div className="login">
      <h1>Sign Up</h1>
      <div className="container">
        <div className="top">
          <i className="fab fa-google" onClick={google}></i>
          <i className="fab fa-facebook-square" onClick={facebook}></i>
          <i className="fab fa-linkedin" onClick={linkedin}></i>
          <i className="fab fa-github" onClick={github}></i>
        </div>

        <p className="divider">
          <span>Or</span>
        </p>

        <form>
          <label>E-mail</label>
          <input type="email" placeholder="Enter your E-mail"></input>

          <label>Password</label>
          <input type="password" placeholder="Enter your password"></input>

          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;