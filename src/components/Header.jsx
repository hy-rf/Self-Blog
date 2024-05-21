import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { ClickAwayListener } from '@mui/base';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '70%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledSearchIconBase = styled(SearchIcon)(() => ({
  position: 'absolute',
  color: 'inherit',
  width: '10%',
  right: '1rem',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '80%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '18ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const handleShowSearchBar = () => {
    if (showSearchBar) {
      document.querySelector('main').style.filter = 'none';
      document.querySelector('nav').style.filter = 'none';
    } else {
      document.querySelector('main').style.filter = 'blur(5px)';
      document.querySelector('nav').style.filter = 'blur(5px)';
    }
    showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
  };
  return (
    <ClickAwayListener
      onClickAway={() => {
        if (!showSearchBar) return;
        setShowSearchBar(false);
        document.querySelector('main').style.filter = 'none';
        document.querySelector('nav').style.filter = 'none';
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar>
            {showSearchBar && (
              <Search>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            )}
            <StyledSearchIconBase onClick={handleShowSearchBar} />
          </Toolbar>
        </AppBar>
      </Box>
    </ClickAwayListener>
  );
}
