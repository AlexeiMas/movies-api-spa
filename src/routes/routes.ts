import * as routes from '../utils/consts'
import HomePage from "../pages/HomePage"
import MoviePage from "../pages/MoviePage"
import SearchPage from "../pages/SearchPage"
import FavoritesPage from "../pages/FavoritesPage"

export type TRoutes = {
  path: string
  Component: () => JSX.Element
}

export const publicRoutes: TRoutes[] = [
  {
    path: routes.HOME_ROUTE,
    Component: HomePage
  },
  {
    path: routes.SEARCH_ROUTE,
    Component: SearchPage
  },
  {
    path: routes.MOVIE_ROUTE,
    Component: MoviePage
  },
  {
    path: routes.FAVORITES_ROUTE,
    Component: FavoritesPage
  }
]
