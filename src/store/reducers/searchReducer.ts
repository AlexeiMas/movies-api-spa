import {SearchActions, SearchActionTypes, TSearch} from "../../types/search"

const initialState: TSearch = {
  searchString: '',
  data: {
    page: 1,
    results: [],
    total_results: 0,
    total_pages: 0
  }
}

export const searchReducer = (state = initialState, action: SearchActions): TSearch => {
  switch (action.type) {
    case SearchActionTypes.GET_ALL:
      return state
    case SearchActionTypes.SET_SEARCH_STRING:
      return {...state, searchString: action.payload}
    case SearchActionTypes.SET_SEARCHED_DATA:
      return {...state, data: action.payload}
    case SearchActionTypes.SET_ACTIVE_PAGE:
      return {...state, data: {...state.data, page: action.payload}}
    default:
      return state
  }
}
