import React from 'react';
import {Box, Fab, Stack} from "@mui/material"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {styled} from "@mui/material/styles"
import Tooltip, {tooltipClasses, TooltipProps} from "@mui/material/Tooltip"
import classes from './style.module.scss'
import {TMovieInfo} from "../../types/popularMovies"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn"
import {TSizeBtnBar} from "../../types/generals"

export type TCardTopBar = Pick<TMovieInfo, "id" | "release_date" | "overview" | "genre_ids"> & TSizeBtnBar

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className, arrow: classes.arrow }} placement={"right"} arrow disableFocusListener />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const CardTopBar: React.FC<TCardTopBar> = ({id, release_date, overview, genre_ids, sizeBtnBar= "large"}) => {
  const {genres} = useTypedSelector(state => state.genres);
  const genres_result = genre_ids.reduce((acc: string[], el) => {
    const founded = genres.find(item => item.id === el);
    return [...acc, (founded ? founded!.name : String(el))]
  }, []);

  return (
    <Stack direction={"row"} justifyContent={"space-between"} m={1}>
      <HtmlTooltip
        title={
          <Box p={2}>
            <Stack direction={"row"} justifyContent={"space-between"} spacing={4}>
              <div className={classes.description}>{genres_result.length ? genres_result.join(', ') : 'Other'}</div>
              <div className={classes.date}>{release_date ? release_date.slice(0, 4) : ''}</div>
            </Stack>
            <Box mt={2}>
              {overview}
            </Box>
          </Box>
        }
      >
        <Fab color="primary" aria-label="add" size={sizeBtnBar}>
          <InfoOutlinedIcon fontSize={sizeBtnBar} />
        </Fab>
      </HtmlTooltip>
      <FavoriteBtn id={id} sizeBtnBar={sizeBtnBar}/>
    </Stack>
  );
};

export default CardTopBar;
