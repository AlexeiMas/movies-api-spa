import {
  PopularMoviesActionTypes,
  TGetAllPopularAction,
  TPopularMovies,
  TSetActivePage,
  TSetPopularAction
} from "../../types/popularMovies"

export const getAllPopularMovies = (): TGetAllPopularAction => ({type: PopularMoviesActionTypes.GET_ALL})

export const setPopularMovies = (payload: TPopularMovies): TSetPopularAction => ({type: PopularMoviesActionTypes.SET_POPULAR, payload})

export const setActivePage = (payload: number): TSetActivePage => ({type: PopularMoviesActionTypes.SET_ACTIVE_PAGE, payload})
