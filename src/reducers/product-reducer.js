import {
    FETCH_PRODUCTS,
    GET_PRODUCT_BY_SLUG,
    SET_PRODUCT_BY_SLUG,
    SORT_BY_NAME_AZ,
    SORT_BY_NAME_ZA,
    SORT_BY_PRICE_ASC,
    SORT_BY_PRICE_DESC
} from "../actions/product-actions";

import productList from '../products.json';

function genericSort(array, type) {
    switch (type) {
        case SORT_BY_NAME_AZ:
            return [].concat(array.sort(sortComparer));
        case SORT_BY_NAME_ZA:
            return [].concat(array.sort(reverseSortComparer));
        case SORT_BY_PRICE_ASC:
            return [].concat(array.sort(sortPriceAsc));
        case SORT_BY_PRICE_DESC:
            return [].concat(array.sort(sortPriceDesc));
        default:
            return []
    }
}

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
    pagination: {
        page: 1,
        perPage: 3,
        sortType: SORT_BY_NAME_AZ
    }
};

const productReducer = (state = initState, action) => {
        switch (action.type) {
            case FETCH_PRODUCTS:
                console.log(FETCH_PRODUCTS);
                if (typeof action.page === 'undefined'
                    || typeof action.perPage === 'undefined'
                    || typeof action.sortType === 'undefined') {
                    action.page = state.pagination.page;
                    action.perPage = state.pagination.perPage;
                    action.sortType = state.pagination.sortType;
                }
                const sliceStart = action.page * action.perPage - action.perPage;
                const sliceEnd = sliceStart + action.perPage;
                const maxPages = Math.ceil(productList.products.length / action.perPage);
                const slicedItems = genericSort(productList.products, action.sortType).slice(sliceStart, sliceEnd);
                return {
                    ...state,
                    items: slicedItems,
                    pagination: {...state.pagination, page: action.page, maxPages: maxPages}
                };
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
                    items: [].concat(state.items.sort(sortComparer)),
                    pagination: {...state.pagination, sortType: SORT_BY_NAME_AZ}
                }
            case SORT_BY_NAME_ZA:
                console.log(SORT_BY_NAME_ZA);
                return {
                    ...state,
                    items: [].concat(state.items.sort(reverseSortComparer)),
                    pagination: {...state.pagination, sortType: SORT_BY_NAME_ZA}
                }
            case SORT_BY_PRICE_ASC:
                console.log(SORT_BY_PRICE_ASC);
                return {
                    ...state,
                    items: [].concat(state.items.sort(sortPriceAsc)),
                    pagination: {...state.pagination, sortType: SORT_BY_PRICE_ASC}
                }
            case SORT_BY_PRICE_DESC:
                console.log(SORT_BY_PRICE_DESC);
                return {
                    ...state,
                    items: [].concat(state.items.sort(sortPriceDesc)),
                    pagination: {...state.pagination, sortType: SORT_BY_PRICE_DESC}
                }
            default:
                return state;
        }
    }
;

export default productReducer;
