import React from 'react';
import {Container, ImageList, Pagination, Stack, Typography} from "@mui/material"
import {findMovies} from "../api/movie.api"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "../hooks/useTypedSelector"
import MovieCard from "../components/MovieCard/MovieCard"
import {createSearchParams, useLocation, useNavigate} from "react-router-dom"
import {HOME_ROUTE, SEARCH_ROUTE} from "../utils/consts"
import {setActivePage, setSearchData, setSearchString} from "../store/actionCreators/search"

const SearchPage = () => {
  const {searchString, data} = useTypedSelector(state => state.search)
  const {search} = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!searchString)
      dispatch(setSearchString(search.split('=')[1]))
  }, [])

  React.useEffect(() => {
    if (searchString !== '') {
      findMovies(searchString).then(data => dispatch(setSearchData(data)))
      navigate({
        pathname: SEARCH_ROUTE,
        search: `?${createSearchParams({movies: searchString})}`
      })
    } else {
      navigate(HOME_ROUTE)
    }
  }, [searchString])

  React.useEffect(() => {
    if (searchString)
      findMovies(searchString, data.page).then(data => dispatch(setSearchData(data)))
  }, [data.page])

  return (
    <Container>
      {
        data.results.length
          ?
          <>
            <ImageList cols={4}>
              {data.results.map((item) =>
                <MovieCard
                  id={item.id}
                  imgSrc={item.poster_path} title={item.title} description={item.overview}
                  key={item.id} year={item.release_date} genre_ids={item.genre_ids}
                />
              )}
            </ImageList>
            {
              data.results.length > 1 &&
              <Stack direction={"row"} justifyContent={"center"} m={4}>
                <Pagination
                  count={(data.total_pages > 500) ? 500 : data.total_pages} page={data.page}
                  onChange={(_, value) => dispatch(setActivePage(value))}
                  color="primary"
                />
              </Stack>
            }
          </>
          :
          <Typography variant={"h4"} paragraph align={"center"}>Not found movies for your request</Typography>
      }
    </Container>
  );
};

export default SearchPage;
