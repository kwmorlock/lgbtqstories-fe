import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import StoriesHeader from "./StoriesHeader";
import * as yup from "yup";
import { PostDiv, TextDiv, Form, ColDiv, PostLabel } from "./StoriesStyles";

const PostStories = (props) => {
  const storyId = window.localStorage.getItem("id");
  const [addedStory, setAddedStory] = useState({
    title: "",
    story: "",
    tags: "",
    usersId: storyId,
  });

  const postFormSchema = yup.object().shape({
    title: yup.string().required("Please enter your title!"),
    story: yup.string().required("Please enter your story!"),
    tags: yup.string().required("Please enter your tags!"),
  });

  const [errors, setErrors] = useState({
    title: "",
    story: "",
    tags: "",
  });

  const formValidation = (e) => {
    yup
      .reach(postFormSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const handleChange = (e) => {
    e.persist();
    const newFormData = {
      ...addedStory,
      [e.target.name]: e.target.value,
    };
    formValidation(e);
    setAddedStory(newFormData);
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    postFormSchema.isValid(addedStory).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [addedStory, postFormSchema]);

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
      <StoriesHeader />
      <PostDiv>
        <TextDiv>
          <Form onSubmit={handleSubmit}>
            <ColDiv>
              <PostLabel for="title">Title:</PostLabel>
              <input
                class="center"
                type="text"
                name="title"
                id="title"
                placeholder="title"
                onChange={handleChange}
                value={addedStory.title}
              />
              {errors.title.length > 0 ? <p>{errors.title}</p> : null}
              <label class="space" for="story">
                Story:
              </label>
              <textarea
                class="center"
                type="text"
                name="story"
                id="story"
                placeholder="story"
                onChange={handleChange}
                value={addedStory.story}
              />
              {errors.story.length > 0 ? <p>{errors.story}</p> : null}
              <label class="space" for="tags">
                Tags:
              </label>
              <input
                class="center"
                type="text"
                name="tags"
                id="tags"
                placeholder="tags"
                onChange={handleChange}
                value={addedStory.tags}
              />
              {errors.tags.length > 0 ? <p>{errors.tags}</p> : null}
              <button
                class="color"
                style={{
                  width: "80px",
                  height: "40px",
                  marginTop: "5%",
                }}
                type="submit"
                disabled={buttonDisabled}
              >
                Add Story
              </button>
            </ColDiv>
          </Form>
        </TextDiv>
      </PostDiv>
    </>
  );
};

export default PostStories;
