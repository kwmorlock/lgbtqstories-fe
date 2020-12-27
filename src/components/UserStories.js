import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialStory = {
  id: null,
  title: "",
  story: "",
  tags: "",
  usersId: "",
};
