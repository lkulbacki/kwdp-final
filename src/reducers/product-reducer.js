import {GET_PRODUCT_BY_SLUG, ADD_TO_CART, SET_PRODUCT_BY_SLUG} from "../actions/product-actions";
import productList from '../products.json';


let initState = {
    items: productList.products
};

const productReducer = (state = initState, action) => {
        switch (action.type) {
            case GET_PRODUCT_BY_SLUG:
                console.log(GET_PRODUCT_BY_SLUG);
                return state.items.filter(product => product.slug === action.slug);
            case SET_PRODUCT_BY_SLUG:
                console.log(SET_PRODUCT_BY_SLUG);
                let currentItem = state.items.find(product => product.slug === action.slug);
                return {...state, currentItem: currentItem}
            default:
                return state;
        }
    }
;

export default productReducer;
