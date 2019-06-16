import React from 'react';
import {connect} from 'react-redux';
import './ProductList.scss';
import ProductBox from '../ProductBox';
import {addToCart} from '../../../actions/cart-actions'

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='ProductList'>
            {
                this.props.items.map(product => {
                    return (
                        <ProductBox key={product.id} product={product} addToCart={this.props.addToCart}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
