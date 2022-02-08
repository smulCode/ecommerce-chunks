
const productsReducer = ( state = [], action) => {
  console.log(state);
    const item = state.find(
      (product) => product.id === action.payload
    );

  
    switch(action.type) {
      case "DISPLAY_ITEM":
        return {
          ...state, currentItem:item
    
        }
  
        case "DISPLAY_ALL": 
        return{
          ...state
        }
        default : return state;
    }
  }
  
  export default productsReducer;