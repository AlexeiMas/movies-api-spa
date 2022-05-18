import {FavoritesActions, FavoritesActionTypes, TFavorites} from "../../types/favorites"
import {getDataFromStorage, updateFavoriteMoviesList} from "../../utils/storageFunctions"

const initialState: TFavorites = {
  favorites: getDataFromStorage() || []
}

export const favoritesReducer = (state = initialState, action: FavoritesActions): TFavorites => {
  switch (action.type) {
    case FavoritesActionTypes.GET_ALL:
      getDataFromStorage()
      return state
    case FavoritesActionTypes.SET_FAVORITES:
      updateFavoriteMoviesList(action.payload)
      return {...state, favorites: [...state.favorites, action.payload]}
    case FavoritesActionTypes.DEL_FAVORITES:
      updateFavoriteMoviesList(action.payload, "del")
      return {...state, favorites: state.favorites.filter(item => item !== action.payload)}
    default:
      return state
  }
}
