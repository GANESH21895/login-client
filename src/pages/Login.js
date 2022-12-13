import React, { useState } from "react";

function Login() {
  //access google auth
  const google = () => {
    window.open("https://multioauth1.onrender.com/auth/google", "_self");
  };

  //access facebook auth
  const facebook = () => {
    window.open("https://multioauth1.onrender.com/auth/facebook", "_self");
  };

  //access linkedin auth
  const linkedin = () => {
    window.open("https://multioauth1.onrender.com/auth/linkedin", "_self");
  };
  //access github auth
  const github = () => {
    window.open("https://multioauth1.onrender.com/auth/github", "_self");
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
          <label for="email">E-mail</label>
          <input type="email" placeholder="Enter your E-mail"></input>

          <label for="password">Password</label>
          <input type="password" placeholder="Enter your password"></input>

          <div className="remember-me">
            <input type="checkbox" checked="checked"></input>
            <p>Remember Me</p>
          </div>

          <button>Log In</button>
        </form>

        <div className="bottom">
          <p>Forgot your password ?</p>
          <a href="/resetpassword">Reset Password</a>
        </div>

        <p className="create-acc">
          <a href="/signup">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;