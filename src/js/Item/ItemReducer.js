const initialState = {
  isFetching: false,
  isOpen: false,
  item: {},
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_POST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'TOGGLE_ITEM_DETAILS_FULFILLED':
      return Object.assign({}, state, {
        isFetching: false,
        isOpen: true,
        item: action.payload,
      });
    case 'CLOSE_ITEM_DETAILS':
      return Object.assign({}, state, {
        isOpen: false,
        item: {},
      });
    default:
      return state;
  }
};

export default itemReducer;
