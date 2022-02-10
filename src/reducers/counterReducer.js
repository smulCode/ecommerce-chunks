const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      if (state <= 0) state = 0;
     else return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
