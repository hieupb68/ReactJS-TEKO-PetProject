import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { Container } from "@mui/material";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://training-program.dev.tekoapis.net/api/v1/posts?page=${page}&pageSize=10`
      );
      console.log(response.data); // Kiểm tra phản hồi từ API
      setPosts(response.data.posts || []); // Đảm bảo rằng posts là một mảng
    } catch (error) {
      console.error("There was an error fetching the posts!", error);
      setPosts([]);
    }
  };

  const handleAdd = () => {
    setEditPost(null);
    setOpen(true);
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `https://training-program.dev.tekoapis.net/api/v1/posts/${id}`
    );
    fetchPosts();
  };

  const handleSave = async (post) => {
    if (post.id) {
      await axios.put(
        `https://training-program.dev.tekoapis.net/api/v1/posts/${post.id}`,
        post
      );
    } else {
      await axios.post(
        "https://training-program.dev.tekoapis.net/api/v1/posts",
        post
      );
    }
    setOpen(false);
    fetchPosts();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>Post Management</h1>
      <PostList
        posts={posts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        page={page}
        setPage={setPage}
      />
      <PostForm
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        editPost={editPost}
      />
    </Container>
  );
};

export default App;
