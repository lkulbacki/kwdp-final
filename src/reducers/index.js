import { combineReducers } from 'redux';
import productReducer  from './product-reducer';
import cartReducer from './cart-reducer';
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    productReducer, cartReducer, form: reduxFormReducer
});

export default reducers;
