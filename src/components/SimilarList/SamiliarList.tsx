import React, {useEffect, useState} from 'react';
import {fetchSimilarMovies} from "../../api/movie.api"
import {Box, ImageList, Typography} from "@mui/material"
import MovieCard from "../MovieCard/MovieCard"
import {TPopularMovies} from "../../types/popularMovies"

const SimilarList: React.FC<{ id: number }> = ({id}) => {
  const [similarData, setSimilarData] = useState<TPopularMovies>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  })
  useEffect(() => {
    if (id)
      fetchSimilarMovies(id).then(data => setSimilarData(data))
  }, [id])

  return (
    <Box my={2} sx={{flexGrow: 1}}>
      <Typography variant={"h5"}>Similar movies</Typography>
      {similarData.results.length ?
        <ImageList sx={{
          gridTemplateColumns: {
            sm: 'repeat(4, 1fr) !important',
            md: 'repeat(5, 1fr) !important',
            lg: 'repeat(8, 1fr) !important',
            xl: 'repeat(8, 1fr) !important',
          },
        }}>
          {
            similarData.results.slice(0,8).map((item) =>
              <MovieCard
                id={item.id} sizeBtnBar={"small"}
                imgSrc={item.poster_path} title={item.title} description={item.overview}
                key={item.id} year={item.release_date} genre_ids={item.genre_ids}
              />)
          }
        </ImageList>
        : <Typography align={"center"}>No similar movies for this one</Typography>
      }
    </Box>
  );
};

export default SimilarList;
