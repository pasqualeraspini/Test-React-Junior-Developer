import React from 'react';

import * as S from './style';

export const SmButton = ({ 
    disabled,

    removeProductsFromStore,
    addProductsToCart,
    products,
    id,
    size
}) => {
    if (disabled) {
        return <S.Button small disabled > Add </S.Button>
        
    }

    return (
        <S.Button
            small
            onClick={() => {
                // Rimuovere una quantità del prodotto nel database
                removeProductsFromStore(products[id - 1], id); 

                // Aggiungere il prodotto al carrello
                addProductsToCart(id, size)
            }}
            >
            Add
        </S.Button>
    )
}

export const LgButton = ({ path, text }) => {
    return (
        <S.ButtonLink to={path}>{text}</S.ButtonLink>
    )
}