
const productsReducer = ( state = [], action) => {
  console.log(state);
    // const item = (state.find)(
    //   (product) => product.name === action.payload
    // );

  
    switch(action.type) {
      case "DISPLAY_ITEM":
        return {
          ...state, currentItem:action.payload,
    
        }
  
        case "DISPLAY_ALL": 
        return{
          ...state
        }
        default : return state;
    }
  }
  
  export default productsReducer;