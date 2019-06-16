export const ADD_QUANTITY = 'ADD_QUANTITY';
export const REMOVE_QUANTITY = 'REMOVE_QUANTITY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function addQuantity(id) {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export function removeQuantity(id) {
    return {
        type: REMOVE_QUANTITY,
        id
    }
}
