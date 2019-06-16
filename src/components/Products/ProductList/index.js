import React from 'react';
import {connect} from 'react-redux';
import './ProductList.scss';
import ProductBox from '../ProductBox';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return <div className='ProductList'>
            {
                this.props.items.map(product => {
                    return (
                        <ProductBox key={product.id} product={product}/>
                    );
                })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.productReducer.items
    }
};

export default connect(mapStateToProps)(ProductList);
