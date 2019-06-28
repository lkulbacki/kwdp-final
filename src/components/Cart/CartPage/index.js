import React from 'react';
import './CartPage.scss';
import CartList from "../CartList";
import {connect} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartForm from "../CartForm";
import {applyCode} from "../../../actions/cart-actions";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
    }

    handleTakeMyMoney = () => {
        toast("You money taken!");
    }

    handlePromoCode = value => {
        this.props.applyCode(value);
    }

    render() {
        return (
            <div>
                <h1>Witamy w koszyku!</h1>
                <CartList/>
                <div>Suma wydatków: {this.props.total}PLN</div>
                <span className="cart-hint">Use code "SAVE" to save money!</span>
                <CartForm onSubmit={this.handlePromoCode}/>
                <div className="btn" onClick={this.handleTakeMyMoney}>Zapłać</div>
                <ToastContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.cartReducer.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        applyCode: (value) => {
            dispatch(applyCode(value))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
