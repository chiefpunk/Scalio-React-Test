import actions from "./actions";

const initState = {
  number: null,
  data: [],
  loading: false,
  error: null
};

function typicodeReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
    case actions.SET_NUMBER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default typicodeReducer;
