import {GenresActions, GenresActionTypes, TGenres} from "../../types/genres"

const initialState: TGenres = {
  genres: []
}

export const genresReducer = (state = initialState, action: GenresActions): TGenres => {
  switch (action.type) {
    case GenresActionTypes.GET_ALL:
      return state
    case GenresActionTypes.SET_GENRES:
      return {...state, ...action.payload}
    case GenresActionTypes.GET_GENRES_BY_ID:
      return {...state, genres: state.genres.filter(item => action.payload.includes(item.id))}
    default:
      return state
  }
}
