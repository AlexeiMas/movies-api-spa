import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material"
import {useTypedSelector} from "../hooks/useTypedSelector"
import {fetchMovieDetails} from "../api/movie.api"
import {TMovieDetails} from "../types/movieDetails"
import FavoritesTable from "../components/FavoritesTable/FavoritesTable"

const FavoritesPage = () => {
  const {favorites} = useTypedSelector(state => state.favorites)
  const [data, setData] = useState<TMovieDetails[]>([])

  useEffect(() => {
    if (favorites.length) {
      const results: TMovieDetails[] = [];
      Promise.all(favorites.map(id => fetchMovieDetails(id).then(data => [...results, data]))).then(data => setData(data.flat(1)))
    }
  }, [favorites])

  return (
    <Container>
      {(favorites.length && data.length)
        ? <FavoritesTable detailsData={data}/>
        : <Typography variant={"h4"} paragraph align={"center"}>No favorites movies yet</Typography>
      }
    </Container>
  );
};

export default FavoritesPage;
