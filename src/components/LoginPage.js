import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../slicereducers/authSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const navToDash = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = () => {
    if (formData.username === "" || formData.password === "") {
      alert("Please fill in all fields");
      return;
    }
    dispatch(loginUser(formData)).then((data) => {
      if (data.payload.isValid) {
        navToDash("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Login To Expensify App</h1>
        <form>
          <div className="box-layout__forminputs">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <button className="button" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <NavLink to="/register" className="box-layout__navlink">
          Register Account
        </NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
