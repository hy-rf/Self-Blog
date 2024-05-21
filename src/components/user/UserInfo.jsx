import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { Suspense, useEffect, useState } from 'react';
import { api } from '@/api';
import { Link } from 'react-router-dom';
const UserInfoLayout = isMobile
  ? styled.div`
      display: flex;
      flex-direction: column;
      gap: 10px;
    `
  : styled.div`
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
    `;
const innerCards = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          margin: '5px',
          backgroundColor: 'rgba(128, 128, 128, 0.2)',
          padding: '5px',
          border: '1px solid grey',
          '&:hover': {
            backgroundColor: 'rgba(256, 256, 256, 0.4)',
            transition: '0.3s',
          },
          '&:not(:hover)': {
            transition: '0.3s',
          },
        },
      },
    },
  },
});
async function getUser() {
  let ret = await api.getself();
  return ret;
}
function UserInfo() {
  useEffect(() => {
    getUser().then((ret) => setUser(ret));
  }, []);
  const [user, setUser] = useState(null);
  return (
    <UserInfoLayout>
      <Card>
        <CardContent>
          <CardHeader title="Basic"></CardHeader>
          <ThemeProvider theme={innerCards}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/536/354"
                title="green iguana"
              />
            </Card>
            <Card>{user != null ? user.name : ''}</Card>
            <Card>
              <CardMedia
                style={{
                  borderRadius: '50%',
                }}
                sx={{
                  height: 64,
                  width: 64,
                }}
                image={`data:image/png;base64, ${user.avatar}`}
              ></CardMedia>
            </Card>
          </ThemeProvider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardHeader title="Security"></CardHeader>
          <ThemeProvider theme={innerCards}>
            <Card>test security</Card>
            <Card>test security</Card>
          </ThemeProvider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <ThemeProvider theme={innerCards}>
            <CardHeader title="Actions"></CardHeader>
            <Card>
              {user != null ? (
                user.posts.map((ele, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/post/${ele.id}`}>{ele.title}</Link>
                      <p>{ele.created}</p>
                    </div>
                  );
                })
              ) : (
                <p>loading</p>
              )}
            </Card>
            <Card>replies</Card>
          </ThemeProvider>
        </CardContent>
      </Card>
      <template>
        <button
          onClick={() => {
            localStorage.removeItem('Token');
            console.info('log out');
            document.location.href = '/';
          }}
        >
          logout
        </button>
      </template>
    </UserInfoLayout>
  );
}
export default UserInfo;
