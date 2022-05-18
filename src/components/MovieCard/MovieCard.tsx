import React from 'react';
import {ImageListItem, ImageListItemBar} from "@mui/material"
import {IMAGE_PATH_BASE, MOVIE_ROUTE} from "../../utils/consts"
import classes from './style.module.scss'
import CardTopBar from "./CardTopBar"
import {useNavigate} from "react-router-dom"
import {TSizeBtnBar} from "../../types/generals"

export type TMovieCard = {
  id: number,
  imgSrc: string | null,
  title: string,
  description: string,
  year: string,
  genre_ids: number[]
}

const MovieCard: React.FC<TMovieCard & TSizeBtnBar> = ({id, imgSrc, title, description, year, genre_ids, sizeBtnBar}) => {
  const navigate = useNavigate();

  const navigateTo = () => navigate(MOVIE_ROUTE.replace(':id', String(id)))

  return (
    <ImageListItem cols={1} rows={1} className={classes.card}>
      {imgSrc ?
        <img
          onClick={navigateTo}
          src={IMAGE_PATH_BASE + imgSrc}
          alt={title}
          loading="lazy"
        />
        :
        <div className={classes.noPoster} onClick={navigateTo}>
          No Poster
        </div>
      }
      <ImageListItemBar
        title={
          <CardTopBar id={id} overview={description} release_date={year} genre_ids={genre_ids} sizeBtnBar={sizeBtnBar}/>
        }
        sx={{background: "unset"}}
        classes={{titleWrap: classes.titleWrap}}
        position="top"
      />
      <ImageListItemBar
        title={title}
        className={classes.title}
        onClick={navigateTo}
      />
    </ImageListItem>
  );
};

export default MovieCard;
