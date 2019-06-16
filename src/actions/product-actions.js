export const GET_PRODUCT_BY_SLUG = 'GET_PRODUCT_BY_SLUG';
export const SET_PRODUCT_BY_SLUG = 'SET_PRODUCT_BY_SLUG';

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
