import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';

const rootReducers = combineReducers({
    productsReducer,
    cartReducer
})

export default rootReducers;