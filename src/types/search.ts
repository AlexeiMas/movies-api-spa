import {TMovieInfo, TPopularMovies} from "./popularMovies"

export enum SearchActionTypes {
  GET_ALL = "GET_ALL",
  SET_SEARCH_STRING = "SET_SEARCH_STRING",
  SET_SEARCHED_DATA = "SET_SEARCHED_DATA",
  SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE"
}

export type TSearch = {
  searchString: string,
  data: {
    page: number,
    results: TMovieInfo[],
    total_pages: number
    total_results: number
  }
}

export type TGetSearchAction = {
  type: SearchActionTypes.GET_ALL,
}

export type TSetSearchStringAction = {
  type: SearchActionTypes.SET_SEARCH_STRING,
  payload: string
}

export type TSetSearchDataAction = {
  type: SearchActionTypes.SET_SEARCHED_DATA,
  payload: TPopularMovies
}

export type TSetActivePage = {
  type: SearchActionTypes.SET_ACTIVE_PAGE,
  payload: number
}

export type SearchActions = TGetSearchAction | TSetSearchStringAction | TSetSearchDataAction | TSetActivePage
