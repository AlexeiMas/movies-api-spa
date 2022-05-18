import {
  GenresActionTypes,
  TGetAllGenresAction,
  TGenres,
  TGetGenresById,
  TSetGenresAction
} from "../../types/genres"

export const getAllGenres = (): TGetAllGenresAction => ({type: GenresActionTypes.GET_ALL})

export const setGenres = (payload: TGenres): TSetGenresAction => ({type: GenresActionTypes.SET_GENRES, payload})

export const getGenresById = (payload: number[]): TGetGenresById => ({type: GenresActionTypes.GET_GENRES_BY_ID, payload})
