
const productsReducer = ( state = [], action) => {



    switch(action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          currentItem: action.payload,
        };
  
        case "DISPLAY_ALL": 
        return{
          ...state
        }
        default : return state;
    }
  }
  
  export default productsReducer;