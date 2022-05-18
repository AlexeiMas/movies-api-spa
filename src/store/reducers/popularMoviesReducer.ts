import {PopularMoviesActions, PopularMoviesActionTypes, TPopularMovies} from "../../types/popularMovies"

const initialState: TPopularMovies = {
  page: 1,
  results: [],
  total_results: 0,
  total_pages: 0
}

export const popularMoviesReducer = (state = initialState, action: PopularMoviesActions): TPopularMovies => {
  switch (action.type) {
    case PopularMoviesActionTypes.GET_ALL:
      return state
    case PopularMoviesActionTypes.SET_POPULAR:
      return {...state, ...action.payload}
    case PopularMoviesActionTypes.SET_ACTIVE_PAGE:
      return {...state, page: action.payload}
    default:
      return state
  }
}
