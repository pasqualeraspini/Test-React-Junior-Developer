import types from '../actions/types';

const INITIAL_STATE = {
    products: []
};

export const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.GET_PRODUCTS:
            return { 
                ...state,
                products: action.payload
            }

        case types.SELECT_SIZE: 
            return {
                ...state,
                products: state.products.filter((_, i) => {
                    return [...state.products, state.products[i] = action.payload]
                })
            }

        case types.REMOVE_PRODUCTS_FROM_STORE: 
            return {
                ...state,
                products: [...state.products]
            }

        default:
            return state;
    }
}