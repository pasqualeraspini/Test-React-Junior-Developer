import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';
import GoTo from '../GoTo';

import * as S from './style';
import Header from '../../utils/styles/header'

const ProductsList = () => {
    const products = useSelector(state => state.productsReducer.products)

    return (
        <>
            <S.ListContainer>
                <Header>
                    <span>LAST PRODUCTS AVAILABLE</span>
                    <span>{products.length} products avaible</span>
                </Header>
                <S.ProductsContainer>
                    <Product />
                </S.ProductsContainer>
            </S.ListContainer>
            <GoTo cart />
        </>
    )
}

export default ProductsList;