import React from 'react';
import {connect} from 'react-redux';
import BasketItem from '../BasketItem';
import {removeFromCart} from "../../../actions/cart-actions";

const BasketList = props => (

    <div className='ProductList'>
        {
            props.addedItems.map(product => {
                console.log(props.addedItems);
                return (
                    <BasketItem key={product.id} product={product} removeFromCart={removeFromCart}/>
                );
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        addedItems: state.cartReducer.addedItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => {
            dispatch(removeFromCart(id))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
