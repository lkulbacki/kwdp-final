import React from 'react';
import './ProductPage.scss';
import {connect} from 'react-redux';

import ProductData from '../../../products.json';
import {setProductBySlug} from "../../../actions/product-actions";
import Button from "reactstrap/es/Button";
import {addToCart} from "../../../actions/cart-actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props);
        this.match = props.match;
        this.product = this.getProduct(ProductData, this.match.params.slug);
        // this.product = props.currentItem;
        props.setProductBySlug(this.match.params.slug);
    }

    getProduct(productArray, slug) {
        return productArray.products.find(product => product.slug === slug);
    }

    handleAddToCart(id) {
        this.props.addToCart(id)
        this.notify()
    }

    notify = () => toast("Product added!");


    render() {
        const product = this.product;
        return (
            <div>
                <h1 className='Product'>{product.name}</h1>
                <p className='ProductPrice'>{product.price}</p>
                <p className='desc'>{product.desc}</p>
                <img className='imageBox' src={product.picture} alt={product.name}/>
                <Button onClick={() => this.handleAddToCart(product.id)}>Do koszyka</Button>
                <ToastContainer/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductBySlug: (slug) => {
            dispatch(setProductBySlug(slug))
        },
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        currentItem: state.productReducer.currentItem
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
