import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { IPosts } from "./AddPost";
import { GetAllPosts } from "../../services/Posts.service";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
const PostList = () => {
  const [postList, setPostList] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  document.title = "Posts List";
  useMemo(() => {
    const getAllPosts = async () => {
      setIsLoading(true);
      return await GetAllPosts("posts")
        .then((response: IPosts[]) => {
          setPostList(response);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    };
    getAllPosts();
  }, []);

  if ((isLoading || postList.length === 0) && !isError) {
    return <p>Loading Data...Please wait..</p>;
  }
  if (isError) {
    return <p>An error occured while fetching data</p>;
  }

  return (
    <>
      <Link to='/Create' style={{ textDecoration: "none" }}>
        <Button variant='contained'>Create</Button>
      </Link>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>User Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align='center'>Description</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {postList.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.userId}
              </TableCell>
              <TableCell component='th' scope='row'>
                <Link to={`/Details/${row.id}`}>{row.title}</Link>
              </TableCell>
              <TableCell align='right'>{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PostList;
