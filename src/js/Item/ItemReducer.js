const initialState = {
  isOpen: false,
  item: {},
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ITEM_DETAILS_FULFILLED':
      return Object.assign({}, state, {
        isOpen: true,
        item: action.payload,
      });
    case 'CLOSE_ITEM_DETAILS':
      return state;
    default:
      return state;
  }
};

export default itemReducer;
