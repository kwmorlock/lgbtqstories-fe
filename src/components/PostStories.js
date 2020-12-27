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
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/stories/`, addedStory)
      .then((res) => {
        setAddedStory(res.data.story);
      })
      .catch((err) => console.log(err, "failed"));
    props.history.push("/api/stories");
  };

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label for="title">Story Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="title"
                onChange={handleChange}
                value={addedStory.title}
              />
               <label for="story">Story</label>
              <input
                type="text"
                name="story"
                id="story"
                placeholder="story"
                onChange={handleChange}
                value={addedStory.story}
              />

              <button type="submit">Add Story</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
