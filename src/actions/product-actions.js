export const GET_PRODUCT_BY_SLUG = 'GET_PRODUCT_BY_SLUG';
export const SET_PRODUCT_BY_SLUG = 'SET_PRODUCT_BY_SLUG';
export const SORT_BY_NAME_AZ = 'SORT_BY_NAME_AZ';
export const SORT_BY_NAME_ZA = 'SORT_BY_NAME_ZA';

export function getProductBySlug(slug) {
    return {
        type: GET_PRODUCT_BY_SLUG,
        slug
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
