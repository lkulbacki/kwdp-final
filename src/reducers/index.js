import { combineReducers } from 'redux';
import productReducer  from './product-reducer';
import cartReducer from './cart-reducer';

const reducers = combineReducers({
    productReducer, cartReducer
});

export default reducers;
