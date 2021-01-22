import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "../comp.css";
import AdminHeader from "./AdminHeader";
import { AdminInput, AdminDiv, AdminButton } from "./AdminStyles";

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
            <AdminInput
              onChange={changeHandler}
              type="text"
              placeholder="Search Tags"
              value={searchTag}
            />
          </form>
        </div>

        <div>
          {adminNote.map((adminNote) => (
            <AdminDiv key={adminNote.id}>
              <div key={adminNote.id}>
                <p>Title: {adminNote.title}</p>
                <p>Story: {adminNote.story}</p>
                <p>Tags: {adminNote.tags}</p>
                <AdminButton onClick={() => deleteStory(adminNote)}>
                  Delete
                </AdminButton>
              </div>
            </AdminDiv>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminStories;
