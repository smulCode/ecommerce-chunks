const shoppingCartReducer = (state = [], action) => {
  console.log(state);
  console.log(action.payload);

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
