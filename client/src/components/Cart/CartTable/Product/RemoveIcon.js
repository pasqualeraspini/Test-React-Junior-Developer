import React  from 'react';
import { connect } from 'react-redux';

import { removeProductFromCart } from '../../../../actions';

const RemoveIcon = ({ 
    removeProductFromCart, 
    selectedSize, 
    id, 
    stateQty
}) => {
    return (
        <div onClick={() => {
            removeProductFromCart(id, selectedSize, stateQty);
        }} 
        className="icon-box">
            <span>Remove</span>
            <div className="icon">
                <div></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeProductFromCart
}

export default connect(null, mapDispatchToProps)(RemoveIcon);