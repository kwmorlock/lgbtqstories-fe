import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const storyId = window.localStorage.getItem("id");

const initialState = {
  title: "",
  story: "",
  tags: "",
  usersId: storyId,
};

const PostStories = (props) => {
  const [addedStory, setAddedStory] = useState(initialState);

  const handleChange = (e) => {
    setAddedStory({
      ...addedStory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post(`/api/stories/`, addedStory)
    .then(res=>{
      setAddedStory(res.data.story);
    })
    .catch(err=>console.log(err, 'failed'))
    props.history.push("/api/stories");
  };
};
