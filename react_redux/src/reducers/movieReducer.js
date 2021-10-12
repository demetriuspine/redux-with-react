import categories from "../data";

function movieReducer(state = { categories: categories }, action) { // aqui é definido o state
  return state;
}

export default movieReducer; // há apenas 1 reducer por arquivo