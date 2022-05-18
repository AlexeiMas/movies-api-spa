import {combineReducers} from "redux";
import {popularMoviesReducer} from "./popularMoviesReducer"
import {genresReducer} from "./genresReducer"
import {searchReducer} from "./searchReducer"
import {favoritesReducer} from "./favoritesReducer"

export const rootReducer = combineReducers({
  popular: popularMoviesReducer,
  genres: genresReducer,
  search: searchReducer,
  favorites: favoritesReducer
})

export type RootState = ReturnType<typeof rootReducer>
