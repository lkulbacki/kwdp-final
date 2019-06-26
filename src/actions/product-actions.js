export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const GET_PRODUCT_BY_SLUG = 'GET_PRODUCT_BY_SLUG';
export const SET_PRODUCT_BY_SLUG = 'SET_PRODUCT_BY_SLUG';
export const SORT_BY_NAME_AZ = 'SORT_BY_NAME_AZ';
export const SORT_BY_NAME_ZA = 'SORT_BY_NAME_ZA';
export const SORT_BY_PRICE_ASC = 'SORT_BY_PRICE_ASC';
export const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC';

export function getProductBySlug(slug) {
    return {
        type: GET_PRODUCT_BY_SLUG,
        slug
    }
}

export function fetchProducts() {
    return {
        type: FETCH_PRODUCTS
    }
}

export function setProductBySlug(slug) {
    return {
        type: SET_PRODUCT_BY_SLUG,
        slug
    }
}

export function sortByNameAZ() {
    return {
        type: SORT_BY_NAME_AZ
    }
}

export function sortByNameZA() {
    return {
        type: SORT_BY_NAME_ZA
    }
}

export function sortByPriceAsc() {
    return {
        type: SORT_BY_PRICE_ASC
    }
}

export function sortByPriceDesc() {
    return {
        type: SORT_BY_PRICE_DESC
    }
}
