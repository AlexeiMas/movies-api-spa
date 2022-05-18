import {
  SearchActionTypes,
  TGetSearchAction,
  TSetActivePage,
  TSetSearchDataAction,
  TSetSearchStringAction,
} from "../../types/search"
import {TPopularMovies} from "../../types/popularMovies"

export const getSearch = (): TGetSearchAction => ({type: SearchActionTypes.GET_ALL})

export const setSearchString = (payload: string): TSetSearchStringAction => ({type: SearchActionTypes.SET_SEARCH_STRING, payload})

export const setSearchData = (payload: TPopularMovies): TSetSearchDataAction => ({type: SearchActionTypes.SET_SEARCHED_DATA, payload})

export const setActivePage = (payload: number): TSetActivePage => ({type: SearchActionTypes.SET_ACTIVE_PAGE, payload})
