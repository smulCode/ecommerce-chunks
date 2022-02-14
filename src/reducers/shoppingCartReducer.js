import {Products} from "../data"

const initState = {
  Products,
  addedItems:[],
  total: 0

}

const shoppingCartReducer = (state = initState, action) => {
console.log(state)
console.log(action.payload)
if(action.type === "ADD_TO_CART"){
  let addedItem = state.Products.find(item => item.id === action.id)
  //check if the action id exists in the addedItems
  console.log(addedItem)
//  let existed_item= state.addedItems.find(item => action.id === item.id)
//  if(existed_item)
//  {
//     addedItem.quantity += 1 
//      return{
//         ...state,
//          total: state.total + addedItem.price 
//           }
// }
//  else{
//     addedItem.quantity = 1;
//     //calculating the total
//     let newTotal = state.total + addedItem.price 
    
    return{
        ...state,
        addedItems: [action.payload],
        total : 0
    }
    
}

else{
return state
}}
// }
export default shoppingCartReducer;
