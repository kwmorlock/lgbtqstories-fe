import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import "../comp.css";
import StoriesHeader from "./StoriesHeader";
import { UserStoriesDiv, MainButton } from "./StoriesStyles";

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
      <StoriesHeader />
      <div>
        <div>
          {stories.map((stories) => (
            <UserStoriesDiv key={stories.id}>
              <div key={stories.id}>
                <p>Title: {stories.title}</p>
                <p>Story: {stories.story}</p>
                <p>Tags: {stories.tags}</p>
                <MainButton onClick={() => editStory(stories)}>Edit</MainButton>
                <MainButton onClick={() => deleteStory(stories)}>
                  Delete
                </MainButton>
              </div>
            </UserStoriesDiv>
          ))}

          {edit && (
            <div
              class="col"
              style={{ margin: "20px auto", width: "70%", display: "flex" }}
            >
              <form onSubmit={saveEdit}>
                <div class="col">
                  <h3 class="whitetext">Edit Story</h3>
                  <input
                    class="center"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    onChange={(e) =>
                      setStoryToEdit({ ...storyToEdit, title: e.target.value })
                    }
                    value={storyToEdit.title}
                  />
                  <textarea
                    class="center"
                    type="text"
                    name="story"
                    id="story"
                    placeholder="story"
                    onChange={(e) =>
                      setStoryToEdit({ ...storyToEdit, story: e.target.value })
                    }
                    value={storyToEdit.story}
                  />
                  <input
                    class="center"
                    type="text"
                    name="tags"
                    id="tags"
                    placeholder="tags"
                    onChange={(e) =>
                      setStoryToEdit({ ...storyToEdit, tags: e.target.value })
                    }
                    value={storyToEdit.tags}
                  />
                  <button
                    style={{ margin: "10px", fontSize: "1.2rem" }}
                    class="color"
                    type="submit"
                  >
                    save
                  </button>
                  <button
                    style={{ margin: "10px", fontSize: "1.2rem" }}
                    class="color"
                    onClick={() => setEdit(false)}
                  >
                    cancel
                  </button>
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
