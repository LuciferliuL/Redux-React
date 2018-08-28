import { combineReducers } from 'redux';
import reducer from "./cart-reducer";
import productsReducer from './products-reducer';
const allReducers = {
    products: productsReducer,
    shopping: reducer
}
const  rootReducer = combineReducers(allReducers)
//使用combineReducers组合reducer
export default rootReducer