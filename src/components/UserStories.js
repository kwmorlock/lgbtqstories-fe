import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

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
      .get(`/api/stories/user/${localStorage.getItem("id")}`)
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
  return (
    <>
      <div>
      <div
          style={{
            margin: "20px auto",
            width: "10%",
            backgroundColor: "hotpink",
            border: "3px solid purple",
          }}
        >
          <Link to="/stories">All Stories</Link>
        </div>
        <div>
          {stories.map((stories) => (
            <div
              key={stories.id}
              style={{
                margin: "20px auto",
                width: "30%",
                backgroundColor: "hotpink",
              }}
            >
              <div key={stories.id}>
                <p>Title: {stories.title}</p>
                <p>Story: {stories.story}</p>
                <p>Tags: {stories.tags}</p>
                <button onClick={() => editStory(stories)}>Edit</button>
                <button onClick={() => deleteStory(stories)}>Delete</button>
                <hr />
              </div>
            </div>
          ))}

          {edit && (
            <div style={{ margin: "20px auto", width: "70%", display: "flex" }}>
              <form onSubmit={saveEdit}>
                <div>
                  <h3>Edit Story</h3>
                  <input
                    onChange={(e) =>
                      setStoryToEdit({ ...storyToEdit, title: e.target.value })
                    }
                    value={storyToEdit.title}
                  />
                  <input
                    onChange={(e) =>
                      setStoryToEdit({ ...storyToEdit, story: e.target.value })
                    }
                    value={storyToEdit.story}
                  />
                  <input
                    onChange={(e) =>
                      setStoryToEdit({ ...storyToEdit, tags: e.target.value })
                    }
                    value={storyToEdit.tags}
                  />
                  <button type="submit">save</button>
                  <button onClick={() => setEdit(false)}>cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserStory;
