const initialState = {
  isFetching: true,
  groups: [],
  searchQuery: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_POSTS_FULFILLED':
      return Object.assign({}, state, {
        isFetching: false,
        groups: action.payload,
      });
    case 'SEARCH_QUERY':
      return Object.assign({}, state, {
        searchQuery: action.query,
      });
    default:
      return state;
  }
};

export default appReducer;
