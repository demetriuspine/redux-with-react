import categories from "../data";

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: categories,
}

function movieReducer(state = INITIAL_STATE, action) { // aqui é definido o state
  return state;
}

export default movieReducer; // há apenas 1 reducer por arquivo