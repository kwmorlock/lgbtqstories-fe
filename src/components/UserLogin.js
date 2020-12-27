import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    isFetching: false,
  });
  const loginFormSchema = yup.object().shape({
    username: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
    email: yup.string().required("Please enter your email!"),
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const formValidation = (e) => {
    yup
      .reach(loginFormSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...userData,
      [e.target.name]: e.target.value,
    };
    formValidation(e);
    setUserData(newFormData);
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    loginFormSchema.isValid(userData).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [userData, loginFormSchema]);

  const loginSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/users/auth/login", userData)
      .then((res) => {
        localStorage.setItem("token", res.data.message);
        localStorage.setItem("id", res.data.usersId);
        props.history.push("/stories");
      })
      .catch((err) => console.log("User Login Error:", err.message));
  };
  return (
    <>
      <div
        className="login"
        style={{
          fontSize: "3rem",
        }}
      >
        Login
      </div>

      <form onSubmit={loginSubmit}>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={inputChange}
          required
        />
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={inputChange}
          required
        />
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          name="email"
          value={userData.email}
          onChange={inputChange}
          required
        />
        <button disabled={buttonDisabled} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
