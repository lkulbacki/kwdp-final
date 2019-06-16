import productList from '../products.json';

let initState = {
    items: productList.products,
    addedItems: [],
    total: 0
};

const productReducer = (state = initState, action) => {
    return state;
};

export default productReducer;
