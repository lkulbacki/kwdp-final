import React from 'react';
import {connect} from 'react-redux';
import './ProductList.scss';
import ProductBox from '../ProductBox';
import {addToCart} from '../../../actions/cart-actions'
import {sortByNameAZ, sortByNameZA} from '../../../actions/product-actions'
import {changePage} from '../../../actions/pagination-actions'
import Pagination from "../../Pagination";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSortByNameAZ() {
        this.props.sortByNameAZ();
    }

    handleSortByNameZA() {
        this.props.sortByNameZA();
    }

    render() {
        return <div className='ProductList'>
            <div onClick={() => {this.handleSortByNameAZ()}}>sortuj AZ</div>
            <div onClick={() => {this.handleSortByNameZA()}}>sortuj ZA</div>
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
        },
        sortByNameAZ: () => {
            dispatch(sortByNameAZ())
        },
        sortByNameZA: () => {
            dispatch(sortByNameZA())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
