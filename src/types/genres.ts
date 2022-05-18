export enum GenresActionTypes {
  GET_ALL = "GET_ALL",
  SET_GENRES = "SET_GENRES",
  GET_GENRES_BY_ID = "GET_GENRES_BY_ID"
}

export type TGenresItem = {
  id: number,
  name: string
}

export type TGenres = {
  genres: TGenresItem[],
}

export type TGetAllGenresAction = {
  type: GenresActionTypes.GET_ALL
}

export type TSetGenresAction = {
  type: GenresActionTypes.SET_GENRES,
  payload: TGenres
}

export type TGetGenresById = {
  type: GenresActionTypes.GET_GENRES_BY_ID,
  payload: number[]
}

export type GenresActions = TGetAllGenresAction | TSetGenresAction | TGetGenresById
