const shoppingCartReducer = (state = [], action) => {


  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
