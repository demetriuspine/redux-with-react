export function selectedMovie() { // nao fazer o default, pois pode-se ter várias actions
  return {
    type: 'SELECT_MOVIE',
    category: 'Drama',
    movie: 'The boy in the striped pajamas'
  }// transformar em uma função que retorna um objeto
}
