import React from 'react';
import {Fab} from "@mui/material"
import {delFavorites, setFavorites} from "../../store/actionCreators/favorites"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import {useDispatch} from "react-redux"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {TSizeBtnBar} from "../../types/generals"

export type TFavoriteBtn = {
  id: number
}

const FavoriteBtn: React.FC<TFavoriteBtn & TSizeBtnBar> = ({id, sizeBtnBar= "large"}) => {
  const {favorites} = useTypedSelector(state => state.favorites);
  const dispatch = useDispatch();
  const itemInStore = favorites.find(el => el === id);

  return (
    <Fab aria-label="add" onClick={() => itemInStore ? dispatch(delFavorites(id)) : dispatch(setFavorites(id))} size={sizeBtnBar}>
      {
        itemInStore
          ? <FavoriteIcon fontSize={sizeBtnBar} color={"error"} />
          : <FavoriteBorderIcon fontSize={sizeBtnBar} color={"disabled"} />
      }
    </Fab>
  );
};

export default FavoriteBtn;
