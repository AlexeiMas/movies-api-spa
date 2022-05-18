export type TMovieDetails = {
  id: number,
  title: string,
  overview: string,
  release_date: string,
  backdrop_path: string | null,
  poster_path: string | null,
  genres: {id: number, name: string}[],
  production_countries: {iso_3166_1: string, name: string}[],
  vote_average: number,
  runtime: number | null
}
