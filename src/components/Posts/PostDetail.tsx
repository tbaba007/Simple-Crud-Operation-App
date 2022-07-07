import React, { useMemo, useState } from "react";
import { TextField, Button } from "@mui/material";
import {
  GetPostById,
  UpdatePosts,
  DeletePosts,
} from "../../services/Posts.service";
import { useParams } from "react-router-dom";
import { IPosts } from "./AddPost";
import { useNavigate } from "react-router-dom";

const defaultStyles = {
  width: 500,
  body: {
    marginTop: 100,
  },
  footer: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
  },
};
const PostDetails = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<IPosts>();
  const [isError, setIsError] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  document.title = "Details";
  useMemo(() => {
    if (id) {
      const getPost = async () => {
        setIsLoading(true);
        setIsError(false);
        return await GetPostById({
          id: Number(id),
          path: "posts",
        })
          .then((response: IPosts) => {
            setTitle(response?.title);
            setDescription(response?.body);
            setDetails(response);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsError(true);
          });
      };
      getPost();
    }
  }, [id]);

  const onUpdate = async () => {
    if (window.confirm("Are you sure you want to update?")) {
      const data: IPosts = {
        body: description,
        title: title,
        id: details?.id,
        userId: details?.userId,
      };
      const updatePosts = await UpdatePosts({
        id: Number(details?.id),
        payLoad: data,
        path: "posts",
      });
      if (updatePosts.id === details?.id) {
        return navigate("/");
      }
    }
  };
  const onDelete = async () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const deletePost = await DeletePosts({
        id: Number(details?.id),
        path: "posts",
      });
      if (Object.keys(deletePost).length < 1) {
        return navigate("/");
      }
    }
  };

  if ((isLoading || !details?.title) && !isError) {
    return <p>Loading...Please wait</p>;
  }
  if (isError) {
    return <p>Error!!! Could not fetch requested detail</p>;
  }
  return (
    <div style={defaultStyles.body}>
      <TextField
        id='standard-basic'
        label='Title'
        required
        value={title}
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
        value={description}
        style={defaultStyles}
        multiline
        variant='filled'
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <section style={defaultStyles.footer}>
        <Button variant='contained' onClick={onUpdate}>
          Update
        </Button>
        <Button variant='contained' onClick={onDelete}>
          Delete
        </Button>
      </section>
    </div>
  );
};

export default PostDetails;
