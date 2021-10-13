export function selectedMovie(dinamicCategory, dinamicMovie) { // nao fazer o default, pois pode-se ter várias actions
  return {
    type: 'SELECT_MOVIE',
    category: dinamicCategory,
    movie: dinamicMovie,
  }// transformar em uma função que retorna um objeto
}
