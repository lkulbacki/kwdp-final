import React from 'react';
import './ProductBox.scss';
import {Link} from 'react-router-dom';

class ProductBox extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    };

    render() {
        const product = this.props.product;
        return (
            <div>
                <Link to={/products/ + product.slug}><h1 className='Product'>{product.name}</h1></Link>
                <p className='ProductPrice'>{product.price}</p>
                <p className='desc'>{product.desc}</p>
                <img className='imageBox' src={product.picture} alt={product.name}/>
                <div className='btn' onClick={() => {
                    this.handleClick(product.id)
                }}>Do koszyka
                </div>
            </div>
        )
    }
}

export default ProductBox;
