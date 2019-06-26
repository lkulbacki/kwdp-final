import {GET_PRODUCT_BY_SLUG, SET_PRODUCT_BY_SLUG, SORT_BY_NAME_AZ, SORT_BY_NAME_ZA} from "../actions/product-actions";
import productList from '../products.json';

function sortComparer(a,b){
    const itemAName = a.name;
    const itemBName = b.name;
    return itemAName.localeCompare(itemBName, 'pl');
};

function reverseSortComparer(a,b){
    const itemAName = a.name;
    const itemBName = b.name;
    return itemBName.localeCompare(itemAName, 'pl');
}

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
            case SORT_BY_NAME_AZ:
                console.log(SORT_BY_NAME_AZ);
                return {
                    ...state,
                    items: [].concat(state.items.sort(sortComparer))
                }
            case SORT_BY_NAME_ZA:
                console.log(SORT_BY_NAME_ZA);
                return {
                    ...state,
                    items: [].concat(state.items.sort(reverseSortComparer))
                }
            default:
                return state;
        }
    }
;

export default productReducer;
