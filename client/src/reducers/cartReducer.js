import types from '../actions/types';

const INITIAL_STATE = {
    addedProducts: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADD_PRODUCTS_TO_CART: 
            const isInCart = state.addedProducts.some(product => {
                return product.id === action.payload.id && product.selectedSize === action.payload.selectedSize
            })

            let cart;

            if (isInCart) {
                cart = state.addedProducts
            } else {
                cart = [...state.addedProducts, action.payload]
            }

            return {
                ...state,
                addedProducts: cart
            }

        case types.REMOVE_PRODUCT_FROM_CART:
            let cartOnRemove = state.addedProducts.slice();
            let index = cartOnRemove.map(product => product.id).indexOf(action.payload.id)

            return {
                ...state,
                addedProducts: cartOnRemove.filter((_, i) => i !== index)
            }

        case types.ADD_QUANTITY:
            return {
                ...state,
                addedProducts: state.addedProducts.filter(product => {
                    return [...state.addedProducts, product]
                })
            }

        default:
            return state;
    }
}