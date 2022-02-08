import { createStore } from 'redux'
import allReducers from './reducers'
import {Products} from './data'


export const store = createStore(
  allReducers,
{productsReducer:Products},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())