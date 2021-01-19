import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "../comp.css";
import AdminHeader from "./AdminHeader";

const AdminStories = (props) => {
  const [adminNote, setStories] = useState([]);
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
          res.data.filter((notes) => {
            if (searchTag === "") {
              return notes;
            } else if (
              notes.title.toLowerCase().includes(searchTag.toLowerCase()) ||
              notes.tags.toLowerCase().includes(searchTag.toLowerCase())
            ) {
              return notes;
            } else {
              return null;
            }
          })
        );
      })
      .catch((err) => console.log("search not working", err));
  }, [searchTag]);

  const deleteStory = (story) => {
    axiosWithAuth()
      .delete(`/api/stories/${story.id}`, story)
      .then((res) => {
        console.log(res);
        document.location.reload();
      })
      .catch((err) => console.log("sorry, not working", err.res));
  };

  return (
    <>
      <AdminHeader />
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
          {adminNote.map((adminNote) => (
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
                <button
                  style={{ margin: "20px", fontSize: "1.2rem" }}
                  class="color"
                  onClick={() => deleteStory(adminNote)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminStories;
