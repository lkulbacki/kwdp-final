import React from 'react';
import './BasketPage.scss';
import BasketList from "../BasketList";
import {connect} from "react-redux";

class BasketPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Witamy w koszyku!</h1>
                <BasketList/>
                <div>Suma wydatków: {this.props.total.toFixed(2)}PLN</div>
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
