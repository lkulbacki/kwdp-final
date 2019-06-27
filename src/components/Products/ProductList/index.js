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
import Button from "reactstrap/es/Button";

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
            return <article className='ProductList'>
                <aside className="container-sorting">
                    <Button onClick={() => {
                        this.handleSortByNameAZ()
                    }}>sortuj A-Z
                    </Button>
                    <Button onClick={() => {
                        this.handleSortByNameZA()
                    }}>sortuj Z-A
                    </Button>
                    <Button onClick={() => {
                        this.handleSortByPriceAsc()
                    }}>sortuj cena rosnąco
                    </Button>
                    <Button onClick={() => {
                        this.handleSortByPriceDesc()
                    }}>sortuj cena malejąco
                    </Button>
                </aside>
                <section className="product-presentation">
                    {
                        this.props.items.map(product => {
                            return (
                                <ProductBox key={product.id} product={product} addToCart={this.props.addToCart}/>
                            );
                        })
                    }
                    <Pagination></Pagination>
                </section>
            </article>
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
