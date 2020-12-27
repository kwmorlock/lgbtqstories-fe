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
      .post(`/api/stories/${storyId}`, addedStory)
      .then((res) => {
        setAddedStory(res.data.newStory);
      })
      .catch((err) => console.log(err, "failed"));
    props.history.push("/stories");
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
              <label for="tags">Tags</label>
              <input
                type="text"
                name="tags"
                id="tags"
                placeholder="tags"
                onChange={handleChange}
                value={addedStory.tags}
              />
              {/* <label for="id">id</label>
              <input
                type="text"
                name="id"
                id="id"
                placeholder="id"
                onChange={handleChange}
                value={addedStory.id}
              /> */}

              <button type="submit">Add Story</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostStories;
