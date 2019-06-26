import {
    GET_PRODUCT_BY_SLUG,
    SET_PRODUCT_BY_SLUG,
    SORT_BY_NAME_AZ,
    SORT_BY_NAME_ZA,
    SORT_BY_PRICE_ASC, SORT_BY_PRICE_DESC
} from "../actions/product-actions";
import productList from '../products.json';

function sortComparer(a, b) {
    const itemAName = a.name;
    const itemBName = b.name;
    return itemAName.localeCompare(itemBName, 'pl');
};

function reverseSortComparer(a, b) {
    const itemAName = a.name;
    const itemBName = b.name;
    return itemBName.localeCompare(itemAName, 'pl');
}

function sortPriceAsc(a, b) {
    const itemAPrice = parseFloat(a.price);
    const itemBPrice = parseFloat(b.price);
    return itemAPrice - itemBPrice;
}

function sortPriceDesc(a, b) {
    const itemAPrice = parseFloat(a.price);
    const itemBPrice = parseFloat(b.price);
    return itemBPrice - itemAPrice;

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
            case SORT_BY_PRICE_ASC:
                console.log(SORT_BY_PRICE_ASC);
                return {
                    ...state,
                    items: [].concat(state.items.sort(sortPriceAsc))
                }
            case SORT_BY_PRICE_DESC:
                console.log(SORT_BY_PRICE_DESC);
                return {
                    ...state,
                    items: [].concat(state.items.sort(sortPriceDesc))
                }
            default:
                return state;
        }
    }
;

export default productReducer;
