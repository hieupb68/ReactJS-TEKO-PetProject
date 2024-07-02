import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const PostForm = ({ open, handleClose, handleSave, editPost }) => {
  const [post, setPost] = useState({ id: '', title: '', description: '' });

  useEffect(() => {
    if (editPost) {
      setPost(editPost);
    } else {
      setPost({ id: '', title: '', description: '' });
    }
  }, [editPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{editPost ? 'Edit Post' : 'Add New Post'}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={post.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          value={post.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleSave(post)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostForm;
