import React, { useState } from "react";

function Home({ user }) {
  const logout = () => {
    window.open("https://multioauth1.onrender.com/auth/logout", "_self");
  };

  return (
    <div className="login">
      <h1>Welcome</h1>
      <div className="container">
        <p className="divider">
          <span>Connect with Me !</span>
        </p>
        <div className="top">
          <a href="https://github.com/GANESH21895" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/ganesh.dinesh.96/"
            target="_blank"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/ganesh21895/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <button style={{ width: "100%", marginTop: "2rem" }} onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;