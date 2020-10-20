import React from 'react';
import { connect } from 'react-redux';

import { addQuantity } from '../../../../actions';

const AddIcon = ({ selectedSize, addQuantity, id, stateQty, setStateQty }) => {
    return (
        <div onClick={() => {
            // Aggiornano lo state dei componenti 
            // - Product
            // - Cart
            setStateQty(stateQty += 1)

            // Action Creator per aggiungere quantità in base alla taglia
            addQuantity(id, selectedSize);
        }} 
        className="icon-box add-icon">
            <span>Add</span>
            <div className="icon">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addQuantity
}

export default connect(null, mapDispatchToProps)(AddIcon);