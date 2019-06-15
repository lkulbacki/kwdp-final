import React from 'react';
import './ProductList.scss';
import ProductBox from '../ProductBox';
import ProductData from '../../../products.json';

const ProductList = props => (
    <div className='ProductList'>
        {
            ProductData.products.map(product => {
                return (
                    <ProductBox key={product.id} product={product}/>
                );
            })
        }
    </div>
);

export default ProductList;
