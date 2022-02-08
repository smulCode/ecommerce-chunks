
export const addToCart = (itemID) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: "ADJUST_ITEM_QTY",
    payload: {
      id: itemID,
      qty,
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
export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const displayItem = (id) => {
  return {
    type: "DISPLAY_ITEM",
    payload:id,
  }
}
export const displayAll = () => {
  return {
    type: "DISPLAY_ALL",
    
  }
}

