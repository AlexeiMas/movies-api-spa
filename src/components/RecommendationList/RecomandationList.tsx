import React, {useEffect, useState} from 'react';
import {fetchRecommendations} from "../../api/movie.api"
import {Box, ImageList, Typography} from "@mui/material"
import MovieCard from "../MovieCard/MovieCard"
import {TPopularMovies} from "../../types/popularMovies"

const RecommendationList: React.FC<{ id: number }> = ({id}) => {
  const [recommendData, setRecommendData] = useState<TPopularMovies>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  })
  useEffect(() => {
    if (id)
      fetchRecommendations(id).then(data => setRecommendData(data))
  }, [id])

  return (
    <Box my={2} sx={{flexGrow: 1}}>
      <Typography variant={"h5"}>Recommendations</Typography>
      {recommendData.results.length ?
        <ImageList sx={{
          gridTemplateColumns: {
            sm: 'repeat(4, 1fr) !important',
            md: 'repeat(5, 1fr) !important',
            lg: 'repeat(8, 1fr) !important',
            xl: 'repeat(8, 1fr) !important',
          },
        }}>
          {
            recommendData.results.slice(0,8).map((item) =>
              <MovieCard
                id={item.id} sizeBtnBar={"small"}
                imgSrc={item.poster_path} title={item.title} description={item.overview}
                key={item.id} year={item.release_date} genre_ids={item.genre_ids}
              />)
          }
        </ImageList>
        : <Typography align={"center"}>No recommendations for this movie</Typography>
      }
    </Box>
  );
};

export default RecommendationList;
