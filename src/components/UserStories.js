import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialStory = {
  id: null,
  title: "",
  story: "",
  tags: "",
  usersId: "",
};

const UserStory = (props) => {
  const [stories, setStories] = useState([]);
  const [edit, setEdit] = useState(false);
  const [storyToEdit, setStoryToEdit] = useState(initialStory);
};

useEffect(() => {
  axiosWithAuth()
    .get(`/api/stories/${localStorage.getItem("id")}`)
    .then((res) => {
      setStories(res.data);
    })
    .catch((err) => console.log("Fix your makeup and try again", err));
}, []);
