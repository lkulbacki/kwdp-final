import React from 'react';
import {connect} from 'react-redux';
import BasketItem from '../BasketItem';
import {removeFromCart, increaseQuantity, decreaseQuantity} from "../../../actions/cart-actions";

const BasketList = props => (

    <div className='ProductList'>
        {
            props.addedItems.map(product => {
                console.log(props.addedItems);
                return (
                    <BasketItem key={product.id} product={product} removeFromCart={props.removeFromCart}
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


export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
