
const productsReducer = ( state = [], action) => {



    switch(action.type) {
      case "wADD_TO_CART":
        return [
          ...state,
           action.payload,
        ];
  
     
        default : return state;
    }
  }
  
  export default productsReducer;