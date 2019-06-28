import React from 'react'
import {Field, reduxForm} from 'redux-form'

let CartForm = props => {
    const {handleSubmit} = props;
    return <form onSubmit={handleSubmit}>
        <div className="field-wrapper">
            <label htmlFor="promoCode">Promo code</label>
            <Field name="promoCode" component="input" type="text"/>
        </div>
        <button className="btn" type="submit">Dodaj kod</button>
    </form>
};

CartForm = reduxForm({
    form: 'cart'
})(CartForm);

export default CartForm
