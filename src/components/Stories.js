import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./comp.css";
import StoriesHeader from "./StoriesHeader";

const UserStories = (props) => {
  const [stories, setStories] = useState([]);
  const [searchTag, setSearchTag] = useState("");

  const changeHandler = (e) => {
    e.persist();
    setSearchTag(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/stories/`)
      .then((res) => {
        setStories(
          res.data.filter((story) => {
            if (searchTag === "") {
              return story;
            } else if (
              story.title.toLowerCase().includes(searchTag.toLowerCase()) ||
              story.tags.toLowerCase().includes(searchTag.toLowerCase())
            ) {
              return story;
            } else {
              return null;
            }
          })
        );
      })
      .catch((err) => console.log("search not working", err));
  }, [searchTag]);

  return (
    <>
      <StoriesHeader />
      <div>
        <div>
          <form>
            <input
              class="center"
              onChange={changeHandler}
              type="text"
              placeholder="Search Tags"
              value={searchTag}
            />
          </form>
        </div>

        <div>
          {stories.map((stories) => (
            <div
              class="colors"
              key={stories.id}
              style={{
                margin: "20px auto",
                width: "40%",
                backgroundColor: "hotpink",
                border: "3px solid purple",
              }}
            >
              <div key={stories.id}>
                <p>Title: {stories.title}</p>
                <p>Story: {stories.story}</p>
                <p>Tags: {stories.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserStories;
