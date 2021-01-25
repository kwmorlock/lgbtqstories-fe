import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Header from "../main/Header";
import {
  MainDiv,
  TitleDiv,
  Title,
  Form,
  Input,
  Button,
  Disclaimer,
} from "../styles/LoginRegStyles";

const Register = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const regFormSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please create your username!")
      .min(3, "Username must be at least 3 characters!"),
    password: yup
      .string()
      .required("Please enter your password!")
      .min(3, "Password must be at least 3 characters!"),
    email: yup
      .string()
      .email("Please use a valid email!")
      .required("Please enter your email!"),
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
      <Header />
      <MainDiv>
        <TitleDiv>
          {" "}
          <Title>Register</Title>
        </TitleDiv>
        <Form onSubmit={regSubmit}>
          <label for="email">Email:</label>
          <Input
            type="text"
            id="email"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={inputChange}
            required
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
          <label for="username">Username:</label>
          <Input
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
          <Input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={inputChange}
            required
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
          <Button disabled={buttonDisabled} type="submit">
            Register
          </Button>
        </Form>
        <Disclaimer>
          Important note, back end goes to sleep without use, and might take up
          to 10 seconds of waiting before it redirects to login after
          registering.
        </Disclaimer>
      </MainDiv>
    </>
  );
};

export default Register;
