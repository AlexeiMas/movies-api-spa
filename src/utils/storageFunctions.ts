export const getDataFromStorage = (key: string = 'favoriteMovies'): number[] | undefined => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined
}

export const updateFavoriteMoviesList = (item: number, action: 'add' | 'del' = "add") => {
  const moviesList = getDataFromStorage();
  if (!moviesList) {
    return localStorage.setItem('favoriteMovies', JSON.stringify([item]))
  }
  if (action === "add") {
    const spreadList = [...moviesList, item];
    return localStorage.setItem('favoriteMovies', JSON.stringify(spreadList))
  }
  if (action === "del") {
    const filteredList = moviesList.filter(el => el !== item);
    return (
      filteredList.length
        ? localStorage.setItem('favoriteMovies', JSON.stringify(filteredList))
        : localStorage.removeItem('favoriteMovies')
    )
  }
}
