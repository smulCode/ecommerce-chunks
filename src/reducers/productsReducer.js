
const productsReducer = ( state = [], action) => {



    switch(action.type) {
      case "ADD_TO_CART":
        let addedItem = state.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
        console.log(addedItem)
        return [
          ...state,
           action.payload,
        ];
  
     
        default : return state;
    }
  }
  
  export default productsReducer;