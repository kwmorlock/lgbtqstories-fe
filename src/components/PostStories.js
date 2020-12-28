import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetch(`/api/stories/${storyId}`)
      .then((res) => res.json())
      .then((result) => setAddedStory(result.data))
      .catch((err) => console.log("error"));
  }, []);

  const handleChange = (e) => {
    setAddedStory({
      ...addedStory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/stories/${storyId}`, addedStory)
      .then((res) => {
        setAddedStory(res.data.newStory);
      })
      .catch((err) => console.log(err, "failed"));
    props.history.push("/stories");
  };

  return (
    <>
      <div class="col">
        <div>
          <form onSubmit={handleSubmit} class="col">
            <div class="col">
              <label class="space" for="title">Title:</label>
              <input
                class="center"
                type="text"
                name="title"
                id="title"
                placeholder="title"
                onChange={handleChange}
                value={addedStory.title}
              />
              <label class="space" for="story">Story:</label>
              <textarea
                class="center"
                type="text"
                name="story"
                id="story"
                placeholder="story"
                onChange={handleChange}
                value={addedStory.story}
              />
              <label class="space" for="tags">Tags:</label>
              <input
                class="center"
                type="text"
                name="tags"
                id="tags"
                placeholder="tags"
                onChange={handleChange}
                value={addedStory.tags}
              />
              <button class="color" type="submit">
                Add Story
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostStories;
