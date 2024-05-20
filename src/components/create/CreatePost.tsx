import CreatePostViewModel from '@/types/CreatePostViewModel';
import { api } from '@/api';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
function CreatePost() {
  const [newPost, setNewPost] = useState<CreatePostViewModel>({
    Title: '',
    Content: '',
    NewTags: [],
  });
  const [tagInputProps, setTagInputProps] = useState({
    error: false,
    helperText: '',
  });
  function handleTitleChange(e: any) {
    setNewPost({
      ...newPost,
      Title: e.target.value,
    });
  }
  function handleContentChange(e: any) {
    setNewPost({
      ...newPost,
      Content: e.target.value,
    });
  }
  function handleAddTag(e: any) {
    let newTagName = (document.getElementById('new-tag') as HTMLInputElement)
      .value;
    if (newTagName == '') {
      setTagInputProps({
        error: true,
        helperText: 'Tag is empty',
      });
      setTimeout(() => {
        setTagInputProps({
          error: false,
          helperText: '',
        });
      }, 5000);
      return;
    }
    let isTagDuplicated =
      newPost.NewTags.find((tag) => tag.Name == newTagName) != undefined;
    if (isTagDuplicated) {
      setTagInputProps({
        error: true,
        helperText: 'Tag already exists',
      });
      setTimeout(() => {
        setTagInputProps({
          error: false,
          helperText: '',
        });
      }, 5000);
      return;
    }
    const newTag = {
      Name: newTagName,
    };
    setNewPost({
      ...newPost,
      NewTags: [...newPost.NewTags, newTag],
    });
    setTagInputProps({
      error: false,
      helperText: 'Tag added',
    });
    setTimeout(() => {
      setTagInputProps({
        error: false,
        helperText: '',
      });
    }, 5000);
    e.target.previousElementSibling.value = '';
  }
  function handleDeleteTag(e: any) {
    let tagToDelete = e.target.previousElementSibling.innerText;
    setNewPost({
      Title: newPost.Title,
      Content: newPost.Content,
      NewTags: newPost.NewTags.filter((tag) => tag.Name != tagToDelete),
    });
  }
  function handleCreatePost() {
    console.log('post created', newPost);
    api
      .createPost(newPost)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <TextField
        label="Title"
        variant="outlined"
        margin="dense"
        onChange={handleTitleChange}
      ></TextField>
      <TextField
        label="Content"
        variant="outlined"
        margin="dense"
        onChange={handleContentChange}
      ></TextField>
      <TextField
        id="new-tag"
        label="Tag"
        variant="outlined"
        margin="dense"
        {...tagInputProps}
      ></TextField>
      {newPost.NewTags.map((tag, index) => (
        <div key={index}>
          <span>
            <span>{tag.Name}</span>
            <button onClick={handleDeleteTag}>delete</button>
          </span>
        </div>
      ))}
      <Button variant="outlined" onClick={handleAddTag}>
        Add tag
      </Button>
      <Button variant="contained" onClick={handleCreatePost}>
        Submit
      </Button>
    </>
  );
}
export default CreatePost;
