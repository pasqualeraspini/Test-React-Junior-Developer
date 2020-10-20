import React from 'react';
import { connect, useSelector } from 'react-redux';

import { getProducts } from '../../actions';

import { useFetching } from '../../hooks';

import CartTable from './CartTable';
import GoTo from '../GoTo';

import * as S from './style';
import Header from '../../utils/styles/header'

const Cart = ({ stateQty, setStateQty, getProducts }) => {
    useFetching(getProducts)

    const products = useSelector(state => state.cartReducer.addedProducts)

    const checkProductsInsideCart = () => {
        if (products.length === 0) return <div style={{ margin: '2rem', fontSize: '2rem'}}>No products inside your cart</div>

        return (
            <>
                <S.CartContainer>
                    <span>Your cart contains:</span>
                    <CartTable 
                        stateQty={stateQty}
                        setStateQty={setStateQty}
                    />
                </S.CartContainer>
                <GoTo checkout stateQty={stateQty} />
            </>
            
        )
    }

    return (
        <>
            <Header>
                <span>CART</span>
                <span>{stateQty - 1} products added</span>
            </Header>
            {checkProductsInsideCart()}
        </>
    )
}

export default connect(null, { getProducts })(Cart);