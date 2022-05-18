import React, {useEffect, useState} from 'react';
import {Container} from "@mui/material"
import {useLocation} from "react-router-dom"
import {fetchMovieDetails} from "../api/movie.api"
import {TMovieDetails} from "../types/movieDetails"
import MovieDetails from "../components/MovieDetails/MovieDetails"
import RecommendationList from "../components/RecommendationList/RecomandationList"
import SimilarList from "../components/SimilarList/SamiliarList"


const MoviePage = () => {
  const {pathname} = useLocation();
  const id = pathname && pathname.slice(pathname.lastIndexOf('/') + 1);
  const [movieData, setMovieData] = useState<TMovieDetails>();

  useEffect(() => {
    if (id)
      fetchMovieDetails(Number(id)).then(data => setMovieData(data))
  }, [id])

  return (
    <Container>
      {movieData &&
        <>
          <MovieDetails movieData={movieData}/>
          <RecommendationList id={Number(id)}/>
          <SimilarList id={Number(id)}/>
        </>
      }
    </Container>
  );
};

export default MoviePage;
