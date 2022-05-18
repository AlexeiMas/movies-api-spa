export enum PopularMoviesActionTypes {
  GET_ALL = "GET_ALL",
  SET_POPULAR = "SET_POPULAR",
  SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE"
}

export type TMovieInfo = {
  id: number,
  poster_path: string | null,
  overview: string,
  release_date: string,
  original_title: string
  original_language: string,
  title: string,
  "genre_ids": number[],
  backdrop_path: string | null,
  popularity: number,
  vote_count: number
  vote_average: number
}

export type TPopularMovies = {
  page: number,
  results: TMovieInfo[],
  total_pages: number
  total_results: number
}

export type TGetAllPopularAction = {
  type: PopularMoviesActionTypes.GET_ALL
}

export type TSetPopularAction = {
  type: PopularMoviesActionTypes.SET_POPULAR,
  payload: TPopularMovies
}

export type TSetActivePage = {
  type: PopularMoviesActionTypes.SET_ACTIVE_PAGE,
  payload: number
}

export type PopularMoviesActions = TGetAllPopularAction | TSetPopularAction | TSetActivePage
