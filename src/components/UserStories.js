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

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/stories/${localStorage.getItem("id")}`)
      .then((res) => {
        setStories(res.data);
      })
      .catch((err) => console.log("Fix your makeup and try again", err));
  }, []);

  const editStory = (stories) => {
    setEdit(true);
    setStoryToEdit(stories);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const { title, story, tags } = storyToEdit;
    console.log({ title, story, tags });
    axiosWithAuth()
      .put(`/api/stories/${storyToEdit.id}`, {
        title,
        story,
        tags,
      })
      .then((res) => {
        console.log(res);
        document.location.reload();
      })
      .catch((err) => console.log("sorry, not working", err.res));
  };

  const deleteStory = (story) => {
    axiosWithAuth()
      .delete(`/api/stories/${story.id}`, story)
      .then((res) => {
        console.log(res);
        document.location.reload();
      })
      .catch((err) => console.log("sorry, not working", err.res));
  };
};
