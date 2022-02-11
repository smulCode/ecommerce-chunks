

const initState = {
  items: [],
  addedItems:[],
  total: 0}

const shoppingCartReducer = (state = [], action) => {


  switch (action.type) {

 
    case "ADD_TO_CART":
      let addedItem = state.find(item=> item.id === action.id)
      console.log(addedItem)
      return [
        ...state,
        action.payload]
      

    default:
      return state;
  }
};

export default shoppingCartReducer;
