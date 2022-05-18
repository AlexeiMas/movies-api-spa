export enum FavoritesActionTypes {
  GET_ALL = "GET_ALL",
  SET_FAVORITES = "SET_FAVORITES",
  DEL_FAVORITES = "DEL_FAVORITES"
}

export type TFavorites = {
  favorites: number[],
}

export type TGetFavoritesAction = {
  type: FavoritesActionTypes.GET_ALL
}

export type TSetFavoritesAction = {
  type: FavoritesActionTypes.SET_FAVORITES,
  payload: number
}

export type TDelFavoritesAction = {
  type: FavoritesActionTypes.DEL_FAVORITES,
  payload: number
}

export type FavoritesActions = TGetFavoritesAction | TSetFavoritesAction | TDelFavoritesAction
