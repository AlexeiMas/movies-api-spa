import React from 'react';
import {IMAGE_PATH_BASE} from "../../utils/consts"
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn"
import {Box, Rating, Stack, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material"
import {TMovieDetails} from "../../types/movieDetails"
import classes from "./style.module.scss"

const MovieDetails: React.FC<{ movieData: TMovieDetails }> = ({movieData}) => {
  const tableKeys = ['release_date', 'production_countries', 'genres', 'runtime']
  const dataForTable = Object.entries(movieData)
    .filter(item => tableKeys.includes(item[0]))
    .map(el => Array.isArray(el[1]) ? [el[0], el[1].map(item => item.name).join(', ')] : el);

  return (
    <Stack direction={{xs: "column", sm: "row"}} justifyContent={"space-between"}>
      <Box sx={{position: "relative"}}>
        <Box
          component={"img"}
          sx={{
            height: "auto",
            width: {xs: "100%", sm: "auto"},
            maxHeight: {md: "max-content"},
            maxWidth: {xs: "100%", sm: 300, md: "max-content"},
          }}
          src={IMAGE_PATH_BASE + movieData.poster_path}
          alt="poster"
        />
        <div className={classes.favoriteBtn}>
          <FavoriteBtn id={movieData.id}/>
        </div>
      </Box>
      <Box pl={{xs: "unset", sm: 4}} sx={{flexGrow: 1}}>
        <Typography mb={1} variant={"h4"} component={"h1"}>{movieData.title}&nbsp;
          (<strong>{movieData.release_date?.slice(0, 4)}</strong>)
        </Typography>
        <Rating name="customized-10" value={movieData.vote_average} max={10} readOnly/>
        <Typography my={2} paragraph>{movieData.overview}</Typography>
        <Box my={4}>
          <TableContainer>
            <Table>
              <TableBody>
                {dataForTable.map(item =>
                  <TableRow hover key={item[0]}>
                    <TableCell className={classes.tableKeys}>{item[0].replace('_', ' ')}:</TableCell>
                    <TableCell>{item[1] as string}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Stack>
  );
};

export default MovieDetails;
