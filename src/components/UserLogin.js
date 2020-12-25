import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const loginFormSchema = yup.object().shape({
    username: yup.string().required("Please enter your username!"),
    password: yup.string().required("Please enter your password!"),
    email: yup.string().required("Please enter your email!"),
  });
};

const [errors, setErrors] = useState({
  username: "",
  password: "",
  email: "",
});

export default Login;
