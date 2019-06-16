import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cart-actions";

// DEV
import productList from '../products.json';
// DEV END

let initState = {
    // DEV
    // addedItems: [],
    addedItems: [{...productList.products[0], quantity: 2}],
    // total: 0.0
    total: parseFloat(productList.products[0].price).toFixed(2) * 2

};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(ADD_TO_CART);
            // REST API call simulation
            let addedItem = productList.products.find(item => item.id === action.id);
            let existing_item = state.addedItems.find(item => action.id === item.id);
            if (existing_item) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    total: (parseFloat(state.total) + parseFloat(addedItem.price)).toFixed(2)
                }
            } else {
                addedItem.quantity = 1;
                let newTotal = (parseFloat(state.total) + parseFloat(addedItem.price)).toFixed(2);

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                };
            }
        case REMOVE_FROM_CART:
            console.log(REMOVE_FROM_CART);
            let itemToRemove = state.addedItems.find(item=> action.id === item.id);
            let remainingItems = state.addedItems.filter(item => item.id !== action.id);
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);

            return {...state, addedItems: remainingItems, total: newTotal.toFixed(2)};
        default:
            return state;
    }

};

export default cartReducer;
