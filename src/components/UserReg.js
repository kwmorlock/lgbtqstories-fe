import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from ".././utils/axiosWithAuth";

const Register = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });
};
