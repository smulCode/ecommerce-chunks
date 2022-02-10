
const productsReducer = ( state = [], action) => {



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