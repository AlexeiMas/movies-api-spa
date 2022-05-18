import {$host} from "./index";
import {EQueryLanguage} from '../types/query';

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`;

export const fetchPopularMovies = async (page?: number, language?: EQueryLanguage) => {
  let queryString = `/movie/popular?${apiKey}`;
  page && (queryString += `&page=${page}`)
  language && (queryString += `&language=${language}`)

  const {data} = await $host.get(queryString)
  return data
}

export const findMovies = async (query: string, page?: number, year?: number, language?: EQueryLanguage) => {
  let queryString = `/search/movie?query=${query}&${apiKey}`;
  page && (queryString += `&page=${page}`)
  year && (queryString += `&year=${year}`)
  language && (queryString += `&language=${language}`)

  const {data} = await $host.get(queryString)
  return data
}

export const fetchGenres = async (language?: EQueryLanguage) => {
  let queryString = `/genre/movie/list?${apiKey}`;
  language && (queryString += `&language=${language}`)

  const {data} = await $host.get(queryString)
  return data
}

export const fetchMovieDetails = async (movieId: number, language?: EQueryLanguage) => {
  let queryString = `/movie/${movieId}?${apiKey}`;
  language && (queryString += `&language=${language}`)

  const {data} = await $host.get(queryString)
  return data
}

export const fetchRecommendations = async (movieId: number, page?: number, language?: EQueryLanguage) => {
  let queryString = `/movie/${movieId}/recommendations?${apiKey}`;
  page && (queryString += `&page=${page}`)
  language && (queryString += `&language=${language}`)

  const {data} = await $host.get(queryString)
  return data
}

export const fetchSimilarMovies = async (movieId: number, page?: number, language?: EQueryLanguage) => {
  let queryString = `/movie/${movieId}/similar?${apiKey}`;
  page && (queryString += `&page=${page}`)
  language && (queryString += `&language=${language}`)

  const {data} = await $host.get(queryString)
  return data
}
