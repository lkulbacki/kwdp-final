import React from 'react';
import './BasketPage.scss';
import BasketList from "../BasketList";
import {connect} from "react-redux";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BasketPage extends React.Component {

    handleTakeMyMoney(){
        toast("You money taken!");
    }

    render() {
        return (
            <div>
                <h1>Witamy w koszyku!</h1>
                <BasketList/>
                <div>Suma wydatków: {this.props.total}PLN</div>
                <div className="btn" onClick={this.handleTakeMyMoney}>Zapłać</div>
                <ToastContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.cartReducer.total
    }
};

export default connect(mapStateToProps)(BasketPage);
