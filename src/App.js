import React, { useCallback, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { Route, Routes, Router, Navigate } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

function App() {
  //persist theme on refreshes !! - use local storage to remember the theme
  //check if there's a local session named 'theme'. if there's not, init it as default: light
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  //change text based on theme
  const [text, setText] = useState("Light Theme");

  //
  const [user, setUser] = useState(null);

  useEffect(() => {
    //fetch api to see if there's an user
    const getUser = () => {
      fetch("https://multioauth1.onrender.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("authentication has failed!");
        })
        .then((resObj) => {
          setUser(resObj);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []); //run everytime app reloads

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const newText = theme === "dark" ? "Light Theme" : "Dark Theme";
    setText(newText);
  };

  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword/*" element={<ResetPassword />} />
      </Routes>
      <div className="theme-toggle">
        <h2>{text}</h2>
        <i onClick={switchTheme} className="fas fa-toggle-on"></i>
      </div>
    </div>
  );
}

export default App;