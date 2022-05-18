import {
  FavoritesActionTypes,
  TDelFavoritesAction,
  TGetFavoritesAction,
  TSetFavoritesAction
} from "../../types/favorites"

export const getFavorites = (): TGetFavoritesAction => ({type: FavoritesActionTypes.GET_ALL})

export const setFavorites = (payload: number): TSetFavoritesAction => ({type: FavoritesActionTypes.SET_FAVORITES, payload})

export const delFavorites = (payload: number): TDelFavoritesAction => ({type: FavoritesActionTypes.DEL_FAVORITES, payload})
