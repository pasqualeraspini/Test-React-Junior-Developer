import React from 'react';
import { useSelector } from 'react-redux';

import GoTo from '../GoTo';
import Header from '../../utils/styles/header'

import * as S from '../Cart/style';
import * as B from '../Buttons/style'

const Checkout = () => {
    const cartProducts = useSelector(state => state.cartReducer.addedProducts)

    const calcPieces = () => {
        const qtyL = cartProducts.map(product => product.addedQtyL)
        const qtyM = cartProducts.map(product => product.addedQtyM)

        const total = [...qtyL, ...qtyM].reduce((a, b) => a + b, 0);
        return total;
    }

    return (
        <>
            <Header />
            <S.CartContainer checkout>
                <div className="content">
                    <span>Thank you!</span>
                    <span>Your {calcPieces()} products will be shipped soon</span>
                    <B.ButtonLink style={{ marginTop: "2rem" }} to="/">Buy more</B.ButtonLink>
                </div>
            </S.CartContainer>
            <GoTo buyMore />
        </>
    )
}

export default Checkout;