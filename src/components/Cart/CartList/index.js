import React from 'react';
import {connect} from 'react-redux';
import CartItem from '../CartItem';
import {removeFromCart, increaseQuantity, decreaseQuantity} from "../../../actions/cart-actions";
import './CartList.scss';

const CartList = props => (

    <div className='basket-list'>
        {
            props.addedItems.map(product => {
                return (
                    <CartItem key={product.id} product={product} removeFromCart={props.removeFromCart}
                                increaseQuantity={props.increaseQuantity} decreaseQuantity={props.decreaseQuantity}/>
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
        },
        increaseQuantity: (id) => {
            dispatch(increaseQuantity(id))
        },
        decreaseQuantity: (id) => {
            dispatch(decreaseQuantity(id))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CartList);
