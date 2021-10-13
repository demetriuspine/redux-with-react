import categories from "../data";

const INITIAL_STATE = {
  selectedCategory: '', // o dom não renderiza {}
  selectedMovie: '',
  categories: categories,
}

function movieReducer(state = INITIAL_STATE, action) { // aqui é definido o state
  switch (action.type) {
    case 'SELECT_MOVIE':      
      return { // redefindo o stado inicial pela action do tipo 'SELECTED_MOVIE'
        ...state,
        selectedCategory: action.category,
        selectedMovie: action.movie,
      }
    default:
      return state;
  }
}

export default movieReducer; // há apenas 1 reducer por arquivo