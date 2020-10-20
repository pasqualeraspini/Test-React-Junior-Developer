import products from '../api';
import types from './types';

/*

 ---------- ACTIONS LISTA PRODOTTI ---------- 

*/

// Fetching prodotti dal database
export const getProducts = () => {
    return async dispatch => {
        const response =  await products.get('/products');
        dispatch({
            type: types.GET_PRODUCTS,
            payload: await response.data
        })
    }
}

// Modificare il valore della taglia selezionata nel database
export const selectSize = (id, value) => {
    return async dispatch => {
        const response = await products.patch(`/products/${id}`, { selectedSize: value });
        dispatch({
            type: types.SELECT_SIZE,
            payload: (await response).data,
                
        })
    }
}

// Eliminare una quantità quando il prodotto viene aggiunto al carrello
export const removeProductsFromStore = (product, id) => {
    return async dispatch => {
        const response = await products.patch(`/products/${id}`, { totalQty: product.totalQty -= 1 });
        dispatch({
            type: types.REMOVE_PRODUCTS_FROM_STORE,
            payload: (await response).data
        })
    }
}


/*
    Aggiungere prodotto al carrello e in base alla taglia selezionata 
    eliminare una quantità di quella taglia 
*/
export const addProductsToCart = (id, selectedSize) => {
    return async (dispatch, getState) => {
        let dbProducts = getState().productsReducer.products;
        const cartProducts = getState().cartReducer.addedProducts;
        let dbProduct = dbProducts[id - 1];

        if (selectedSize === "50" && dbProduct.selectedSize !== "53") {
            const response = await products.patch(`/products/${id}`, { 
                qtySizeM: dbProduct.qtySizeM -= 1,
                addedQtyM: dbProduct.addedQtyM += 1
            })

            await response;

            cartProducts.filter(cartProduct => {
                if (cartProduct.id === id) {
                    cartProduct.qtySizeM -= 1;
                    cartProduct.addedQtyM += 1;
                    cartProduct.newPrice = response.data.newPrice * response.data.addedQtyM;
                }
            })

            dispatch({
                type: types.ADD_PRODUCTS_TO_CART,
                payload: response.data
            })
        } else {
            const response = await products.patch(`/products/${id}`, { 
                qtySizeL: dbProduct.qtySizeL -= 1,
                addedQtyL: dbProduct.addedQtyL += 1
            })

            await response;

            cartProducts.filter(cartProduct => {
                if (cartProduct.id === id) {
                    cartProduct.qtySizeL -= 1;
                    cartProduct.addedQtyL += 1;
                    cartProduct.newPrice = response.data.newPrice * response.data.addedQtyL;
                }
            })

            dispatch({
                type: types.ADD_PRODUCTS_TO_CART,
                payload: response.data
            })
        }        
    }
}



/*

 ---------- ACTIONS CARRELLO ---------- 

*/
// Aggiungere quantità
export const addQuantity = (id, selectedSize) => {
    return async (dispatch, getState)=> {
        const dbProducts = getState().productsReducer.products;
        const cartProducts = getState().cartReducer.addedProducts;
        let dbProduct = dbProducts[id - 1];

        if (selectedSize === "50") {
            const response =  await products.patch(`/products/${id}`, { 
                qtySizeM: dbProduct.qtySizeM -= 1, 
                totalQty: dbProduct.totalQty -= 1,
                addedQtyM: dbProduct.addedQtyM += 1
            })

            await response;

            cartProducts.filter(cartProduct => {
                if (cartProduct.id === id) {
                    cartProduct.qtySizeM -= 1;
                    cartProduct.addedQtyM += 1;
                    cartProduct.newPrice = response.data.newPrice * cartProduct.addedQtyM;

                    return dispatch({
                        type: types.ADD_QUANTITY,
                        payload: cartProduct
                    })
                }
            })
        } else {
            const response = await products.patch(`/products/${id}`, { 
                qtySizeL: dbProduct.qtySizeL -= 1, 
                totalQty: dbProduct.totalQty -= 1,
                addedQtyL: dbProduct.addedQtyL += 1
            })

            await response;

            cartProducts.filter(cartProduct => {
                if (cartProduct.id === id) {
                    cartProduct.qtySizeL -= 1;
                    cartProduct.addedQtyL += 1;
                    cartProduct.newPrice = response.data.newPrice * cartProduct.addedQtyL;

                    return dispatch({
                        type: types.ADD_QUANTITY,
                        payload: cartProduct
                    })
                }
            })
        }
    }
}

// Rimuovere il prodotto dal carrello e fare un reset delle quantità aggiunte
 export const removeProductFromCart = (id, selectedSize, stateQty) => {
     return async (dispatch, getState)=> {
        const dbProducts = getState().productsReducer.products;
        let dbProduct = dbProducts[id - 1];

         if (selectedSize === "50") {
            const response = await products.patch(`/products/${id}`, { 
                qtySizeM: dbProduct.qtySizeM + dbProduct.addedQtyM,
                totalQty: dbProduct.totalQty + dbProduct.addedQtyM,
                addedQtyM: 0,
            })

            return dispatch({
                type: types.REMOVE_PRODUCT_FROM_CART,
                payload: await (response).data
            })
         } else {
            const response = await products.patch(`/products/${id}`, { 
                qtySizeL: dbProduct.qtySizeL + dbProduct.addedQtyL, 
                totalQty: dbProduct.totalQty + dbProduct.addedQtyL,
                addedQtyL: 0,
            })

            return dispatch({
                type: types.REMOVE_PRODUCT_FROM_CART,
                payload: await (response).data
            })
         }
     }
 }