import * as React from 'react';
import {useEffect} from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {createSearchParams, useLocation, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {FAVORITES_ROUTE, HOME_ROUTE, SEARCH_ROUTE} from "../../utils/consts"
import {setSearchString} from "../../store/actionCreators/search"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {Tooltip} from "@mui/material"

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20rem',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const {pathname} = useLocation()
  const {searchString} = useTypedSelector(state => state.search)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    (searchString.length > 0) &&
    navigate({
      pathname: SEARCH_ROUTE,
      search: `?${createSearchParams({movies: searchString})}`
    })
  }, [searchString && pathname === HOME_ROUTE])

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position={"sticky"} color={"primary"}>
        <Toolbar>
          <Tooltip title="Favorites movies" arrow>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{mr: 2}}
              onClick={() => navigate(FAVORITES_ROUTE)}
            >
              <FavoriteIcon/>
            </IconButton>
          </Tooltip>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => {
              dispatch(setSearchString('')) && navigate(HOME_ROUTE)
            }}
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, cursor: 'pointer'}}
          >The Movie DB</Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchString}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearchString(e.target.value))}
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
