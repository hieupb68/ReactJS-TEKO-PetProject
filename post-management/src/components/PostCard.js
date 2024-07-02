import React from 'react';
import { Card, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const PostCard = ({ post, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(post)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => onDelete(post.id)}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
