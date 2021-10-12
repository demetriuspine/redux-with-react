import { createStore } from "redux";
import movieReducer from "../reducers/movieReducer";

const store = createStore(movieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

/*
redux snipppets

rxaction→
export const actionName = (payload) => ({
  type: type,
  payload
})

rxreducer→
const initialState = {

}
export default (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}




*/