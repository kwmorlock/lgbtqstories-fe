import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const regFormSchema = yup.object().shape({
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
      .reach(regFormSchema, e.target.name)
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
    regFormSchema.isValid(userData).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [userData, regFormSchema]);

  const regSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://lgbtqstories.herokuapp.com/api/users/auth/register",
        userData
      )
      .then((res) => {
        localStorage.setItem("id", res.data.usersId);
        props.history.push("/login");
      })
      .catch((err) => console.log("User registration Error:", err.message));
  };
  return (
    <>
      <div className="register">Register</div>

      <form onSubmit={regSubmit}>
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
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
