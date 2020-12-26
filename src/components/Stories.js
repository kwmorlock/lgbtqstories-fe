import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UserStories = (props) => {
  const [stories, setStories] = useState([]);
  const [searchTag, setSearchTag] = useState("");

  const changeHandler = (e) => {
    e.persist();
    setSearchTag(e.target.value);
  };

  useEffect(() => {
    authentication()
      .get(`/api/stories/`)
      .then((res) => {
        setStories(
          res.data.filter((story) => {
            if (searchTag === "") {
              return story;
            } else if (story.title === searchTag || story.tag === searchTag) {
              return story;
            } else {
              return null;
            }
          })
        );
      })
      .catch((err) => console.log("search not working", err));
  }, [searchTag]);
};

export default UserStories;
