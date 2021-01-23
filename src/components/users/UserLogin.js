import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Header from "../Header";
import { MainDiv, TitleDiv, Title, LoginForm } from "./LoginRegStyles";

const Login = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    isFetching: false,
  });
  const loginFormSchema = yup.object().shape({
    username: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
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
      <Header />
      <MainDiv>
        <TitleDiv>
          {" "}
          <Title>Login</Title>
        </TitleDiv>

        <LoginForm onSubmit={loginSubmit}>
          <label for="username">Username:</label>
          <input
            class="centerlog"
            type="text"
            id="username"
            placeholder="username"
            name="username"
            value={userData.username}
            onChange={inputChange}
            required
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
          <label for="password">Password:</label>
          <input
            class="centerlog"
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={inputChange}
            required
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
          <button
            class="color"
            style={{
              width: "80px",
              height: "40px",
            }}
            disabled={buttonDisabled}
            type="submit"
          >
            Login
          </button>
        </LoginForm>
      </MainDiv>
    </>
  );
};

export default Login;
