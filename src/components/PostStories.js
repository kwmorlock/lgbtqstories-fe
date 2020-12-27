import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const storyId = window.localStorage.getItem("id");

const initialState = {
    title: "",
    story: "",
    tags: "",
    usersId: storyId
  };