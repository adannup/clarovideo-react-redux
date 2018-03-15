const initialState = {
  searchQuery: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_QUERY':
      return {
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
