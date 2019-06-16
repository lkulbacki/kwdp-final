import React from 'react';
import './BasketItem.scss';
import {Link} from "react-router-dom";

class BasketItem extends React.Component {

    handleDeleteItem = (id) => {
        this.props.removeFromCart(id);
    };

    render() {
        const product = this.props.product;
        console.log(this.props);
        return (
            <div>
                <Link to={/products/ + product.slug}><h1 className='Product'>{product.name}</h1></Link>
                <p className='ProductPrice'>{product.price}</p>
                <p className='desc'>{product.desc}</p>
                <div><div className='icon'>-</div><p className='quantity'>Quantity: {product.quantity}</p><div className='icon'>+</div></div>
                <img className='imageBox' src={product.picture} alt={product.name}/>
                <div className='icon' onClick={() => {this.handleDeleteItem(product.id)}}>REMOVE</div>
            </div>
        )
    }
}

export default BasketItem;
