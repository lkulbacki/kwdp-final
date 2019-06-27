import React from 'react';
import {connect} from 'react-redux';
import './Pagination.scss';
import {fetchProducts} from '../../actions/product-actions'

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangePage(page) {
        this.props.fetchProducts(page, 3, this.props.pagination.sortType);
    }

    render() {
        let pagination = this.props.pagination;
        let pagesArr = [];
        for (var i = 0; i < this.props.pagination.maxPages; i++) {
            pagesArr.push(i + 1);
        }

        return <ul className='pagination'>
            {pagesArr.map((page, index) =>
                <li key={index} className={pagination.page === page ? 'active page-item' : 'page-item'}>
                    <a onClick={() => this.handleChangePage(page)}>{page}</a>
                </li>
            )}

            <li className={pagination.page === pagination.maxPages ? 'disabled page-item' : 'page-item'}>
                <a onClick={() => this.handleChangePage(pagination.page + 1)}>--></a>
            </li>
        </ul>
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
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
