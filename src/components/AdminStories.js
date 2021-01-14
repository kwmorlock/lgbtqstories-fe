import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "./comp.css";
import StoriesHeader from "./StoriesHeader";

const AdminStories = (props) => {
  const [stories, setStories] = useState([]);
  const [searchTag, setSearchTag] = useState("");

  const changeHandler = (e) => {
    e.persist();
    setSearchTag(e.target.value);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/notes/`)
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
          {stories.map((adminNote) => (
            <div
              class="colors"
              key={adminNote.id}
              style={{
                margin: "20px auto",
                width: "40%",
                backgroundColor: "hotpink",
                border: "3px solid purple",
              }}
            >
              <div key={adminNote.id}>
                <p>Title: {adminNote.title}</p>
                <p>Story: {adminNote.story}</p>
                <p>Tags: {adminNote.tags}</p>
                <p>Notes: {adminNote.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminStories;
