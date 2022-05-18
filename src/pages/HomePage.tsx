import React from 'react';
import {Container, ImageList, Pagination, Stack} from "@mui/material"
import {fetchPopularMovies} from "../api/movie.api"
import {useDispatch} from "react-redux"
import {setActivePage, setPopularMovies} from "../store/actionCreators/popularMovies"
import {useTypedSelector} from "../hooks/useTypedSelector"
import MovieCard from "../components/MovieCard/MovieCard"

const HomePage = () => {
  const {page, total_pages, results} = useTypedSelector(state => state.popular)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (!results.length)
      fetchPopularMovies().then(data => dispatch(setPopularMovies(data)))
  }, [])

  React.useMemo(() => {
    fetchPopularMovies(page).then(data => dispatch(setPopularMovies(data)))
  }, [page])

  return (
    <Container>
      <ImageList cols={4}>
        {results.map((item) =>
          <MovieCard id={item.id} imgSrc={item.poster_path} title={item.title} description={item.overview} key={item.id} year={item.release_date} genre_ids={item.genre_ids}/>
        )}
      </ImageList>
      <Stack direction={"row"} justifyContent={"center"} m={4}>
        <Pagination count={(total_pages > 500) ? 500 : total_pages} page={page} onChange={(_, value) => dispatch(setActivePage(value))} color="primary" />
      </Stack>
    </Container>
  );
};

export default HomePage;
