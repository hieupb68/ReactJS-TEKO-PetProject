import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const PostList = ({ posts, onEdit, onDelete, onAdd, page, setPage }) => {
  return (
    <div>
      <Button onClick={onAdd}>Add Post</Button>
      <List>
        {posts.length ? (
          posts.map((post) => (
            <ListItem key={post.id} button>
              <ListItemText
                primary={post.title}
                secondary={post.description}
                onClick={() => onEdit(post)}
              />
              <Button onClick={() => onDelete(post.id)}>Delete</Button>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No posts available" />
          </ListItem>
        )}
      </List>
      <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </div>
  );
};

export default PostList;
