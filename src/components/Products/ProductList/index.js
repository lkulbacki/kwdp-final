import React from 'react';
import {connect} from 'react-redux';
import './ProductList.scss';
import ProductBox from '../ProductBox';
import {addToCart} from '../../../actions/cart-actions'
import {
    sortByNameAZ,
    sortByNameZA,
    sortByPriceAsc,
    sortByPriceDesc,
    fetchProducts
}
    from '../../../actions/product-actions'
import Pagination from '../../Pagination';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchProducts();
    }

    handleSortByNameAZ() {
        this.props.sortByNameAZ();
    }

    handleSortByNameZA() {
        this.props.sortByNameZA();
    }

    handleSortByPriceAsc() {
        this.props.sortByPriceAsc();
    }

    handleSortByPriceDesc() {
        this.props.sortByPriceDesc();
    }

    render() {
        if (typeof this.props.items !== 'undefined' && this.props.items.length > 0) {
            return <div className='ProductList'>
                <div onClick={() => {
                    this.handleSortByNameAZ()
                }}>sortuj AZ
                </div>
                <div onClick={() => {
                    this.handleSortByNameZA()
                }}>sortuj ZA
                </div>
                <div onClick={() => {
                    this.handleSortByPriceAsc()
                }}>sortuj cena rosnąco
                </div>
                <div onClick={() => {
                    this.handleSortByPriceDesc()
                }}>sortuj cena malejąco
                </div>
                {
                    this.props.items.map(product => {
                        return (
                            <ProductBox key={product.id} product={product} addToCart={this.props.addToCart}/>
                        );
                    })
                }
                <Pagination></Pagination>
            </div>
        } else {
            return null
        }


    }
}

const
    mapStateToProps = (state) => {
        return {
            items: state.productReducer.items,
            pagination: state.productReducer.pagination
        }
    };

const
    mapDispatchToProps = (dispatch) => {
        return {
            fetchProducts: (page, perPage, sortType) => {
                dispatch(fetchProducts(page, perPage, sortType))
            },
            addToCart: (id) => {
                dispatch(addToCart(id))
            },
            sortByNameAZ: () => {
                dispatch(sortByNameAZ())
            },
            sortByNameZA: () => {
                dispatch(sortByNameZA())
            },
            sortByPriceAsc: () => {
                dispatch(sortByPriceAsc())
            },
            sortByPriceDesc: () => {
                dispatch(sortByPriceDesc())
            },
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)

(
    ProductList
)
;
