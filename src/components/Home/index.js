import React from 'react';
import ProductList from '../Products/ProductList';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Product list</h1>
                <ProductList/>
            </div>
        );
    }
}
