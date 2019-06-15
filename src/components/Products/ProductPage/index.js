import React from 'react';
import './ProductPage.scss';
import ProductData from '../../../products.json';

export class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.match = props.match;
        this.product = this.getProduct(ProductData.products, this.match.params.slug)[0];

    }

    getProduct(productArray, slug) {
        return productArray.filter(function(product) {
            return product.slug === slug;
        });
    }

    render() {
        const product = this.product;
        return (
            <div>
                <h1 className='Product'>{product.name}</h1>
                <p className='ProductPrice'>{product.price}</p>
                <p className='desc'>{product.desc}</p>
                <img className='imageBox' src={product.picture} alt={product.name}/>
            </div>
        )
    }
}

export default ProductPage;
