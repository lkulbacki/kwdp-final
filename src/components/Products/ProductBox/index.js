import React from 'react';
import './ProductBox.scss';
import {Link} from 'react-router-dom';

class ProductBox extends React.Component {

    handleAddToCart = (id) => {
        this.props.addToCart(id);
    };

    render() {
        const product = this.props.product;
        return (
            <div className="product-box">
                <Link to={/products/ + product.slug}><h1 className='Product'>{product.name}</h1></Link>
                <p className='ProductPrice'>{product.price}<span> {product.special}</span></p>
                <p className='desc'>{product.desc}</p>
                <img className='imageBox' src={product.picture} alt={product.name}/>
                <div className='btn' onClick={() => {
                    this.handleAddToCart(product.id)
                }}>Do koszyka
                </div>
            </div>
        )
    }
}

export default ProductBox;
