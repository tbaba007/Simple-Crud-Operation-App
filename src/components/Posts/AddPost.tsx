import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddPost } from "../../services/Posts.service";

export interface IPosts {
  userId?: number;
  id?: string;
  title: string;
  body: string;
}

const defaultStyles = {
  width: 500,
  body: {
    marginTop: 100,
  },
};
const AddPosts = () => {
  let navigate = useNavigate();
  document.title = "Add Post";
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData: IPosts = {
      body: description,
      title: title,
    };
    const post = await AddPost({
      path: "posts",
      payLoad: postData,
    });
    if (post.id > 0) {
      return navigate("/");
    }
  };
  return (
    <form onSubmit={onSave} style={defaultStyles.body}>
      <TextField
        id='standard-basic'
        label='Title'
        required
        style={defaultStyles}
        variant='standard'
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <TextField
        id='filled-textarea'
        label='Description'
        placeholder='Placeholder'
        required
        style={defaultStyles}
        multiline
        variant='filled'
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <Button type='submit' variant='contained'>
        Save
      </Button>
    </form>
  );
};

export default AddPosts;
