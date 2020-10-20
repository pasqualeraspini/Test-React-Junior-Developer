import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { LgButton } from '../Buttons'

import * as S from './style';

const GoTo = ({ cart, checkout, buyMore, stateQty }) => {
    const productsAdded = useSelector(state => state.cartReducer.addedProducts.length)

    if (cart) {
        return (
            <S.GoTo>
                <div className="content">
                    <div className="left"></div>
                    <div className="right">
                        <div className="right__added_items">
                            {productsAdded} items added
                        </div>
                        <LgButton path="/cart" text="Go to cart" />
                    </div>
                </div>
            </S.GoTo>
        )
    }

    if (checkout) {
        return (
            <S.GoTo>
                <div className="content">
                    <div className="left">
                        <Link to="/" className="left__goBack">
                            <div className="icon-box">
                                <span></span>
                                <span></span>
                            </div>
                            Back
                        </Link>
                    </div>
                    <div className="right">
                        <div className="right__added_items">
                            {stateQty - 1} items added
                        </div>
                        <LgButton path="/checkout" text="Checkout" />
                    </div>
                </div>
            </S.GoTo>
        )
    }

    if (buyMore) {
        return (
            <S.GoTo>
                <div className="content">
                    <div className="left"></div>
                    <div className="right">
                        <LgButton path="/" text="Buy more" />
                    </div>
                </div>
            </S.GoTo>
        )
    }
}

export default GoTo;