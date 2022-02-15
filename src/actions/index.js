
export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    id,
      // quantity: quantity,
      // totalPrice: totalPrice,
      
    
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
   id
  };
};

export const adjustItemQty = (itemID, quantity) => {
  return {
    type: "ADJUST_ITEM_QTY",
    payload: {
      id: itemID,
      quantity,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: "LOAD_CURRENT_ITEM",
    payload: item,
  };
};

export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload:nr
  }
}
export const decrement = (nr) => {
  return {
    type: "DECREMENT",
    payload:nr
  }
}




