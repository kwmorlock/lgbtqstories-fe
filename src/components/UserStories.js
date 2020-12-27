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
