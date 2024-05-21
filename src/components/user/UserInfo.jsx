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
import { useEffect, useState } from 'react';
import { api } from '@/api';
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
function UserInfo() {
  const [user, setUser] = useState(api.getself());
  useEffect(() => {
    console.log(user);
  }, [user]);
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
            <Card>username:</Card>
            <Card>email:</Card>
          </ThemeProvider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <CardHeader title="Security"></CardHeader>
          <ThemeProvider theme={innerCards}>
            <Card>password:</Card>
            <Card>password:</Card>
          </ThemeProvider>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <ThemeProvider theme={innerCards}>
            <CardHeader title="Actions"></CardHeader>
            <Card>password:</Card>
            <Card>password:</Card>
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
