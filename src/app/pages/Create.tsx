import { Link, Route, Routes, redirect } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import isLogin from '../utility/islogin';
function Create() {
  if (!isLogin()) {
    return document.location.assign('/user');
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button>
            <Link
              style={{
                textDecorationLine: 'none',
              }}
              to={'post'}
            >
              New Post
            </Link>
          </Button>
          <Button>
            <Link
              style={{
                textDecorationLine: 'none',
              }}
              to={'chat'}
            >
              New Chat
            </Link>
          </Button>
        </ButtonGroup>
        <Routes>
          <Route path="post" element={<p>create post</p>}></Route>
          <Route path="chat" element={<p>create chat</p>}></Route>
          <Route path="*" element={<p>Guess u want</p>} />
        </Routes>
      </div>
    </>
  );
}
export default Create;
