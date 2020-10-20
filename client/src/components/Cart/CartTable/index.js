import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product';

import * as S from './style';

const CartTable = ({ stateQty, setStateQty }) => {
    // Selezionare l'array nel reducer dei prodotti aggiunti
    const cartProducts = useSelector(state => state.cartReducer.addedProducts);

    const calcPieces = () => {
        const qtyL = cartProducts.map(product => product.addedQtyL)
        const qtyM = cartProducts.map(product => product.addedQtyM)

        let total = [...qtyL, ...qtyM].reduce((a, b) => a + b, 0);

        // Trovare duplicati nel cart se hanno taglie differenti
        const ids = cartProducts.map(product => product.id );
        const isDuplicate = ids.some((product, i) => { 
            return ids.indexOf(product) !== i 
        });

        if (isDuplicate) {
            const duplicates = cartProducts.filter((product, i) => cartProducts.indexOf(product) === i);
            const duplicatesQtyL = duplicates.map(product => product.addedQtyL)
            const duplicatesQtyM = duplicates.map(product => product.addedQtyM)

            let tbd = [...duplicatesQtyL, ...duplicatesQtyM].reduce((a, b) => a + b, 0) / duplicates.length;

            return (total -= tbd).toFixed(0)
        }
        
        return total.toFixed(0);
    }

    return (
        <>
            <S.TableContainer>
                <S.Table>
                    <tbody>
                        <tr className="names">
                            <th>Model</th>
                            <th>SKU</th> 
                            <th>Size</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                        {cartProducts.map(({ id, model, sku, qtySizeM, qtySizeL, selectedSize, newPrice, addedQtyL, addedQtyM }, i) => {
                            return (
                                <Product 
                                    id={id}
                                    model={model}
                                    sku={sku}
                                    stateQty={stateQty}
                                    setStateQty={setStateQty}
                                    qtySizeM={qtySizeM}
                                    qtySizeL={qtySizeL}
                                    addedQtyL={addedQtyL}
                                    addedQtyM={addedQtyM}
                                    selectedSize={selectedSize}
                                    newPrice={newPrice}
                                    key={id}
                                />
                            )
                        })}
                    </tbody>               
                </S.Table>
                <S.Total>
                    <div className="total__pieces">
                        Total pieces <span>{calcPieces()}</span>
                    </div>
                    <div className="total__price">
                        Total price 
                        <span>€ {
                            cartProducts.map(product => product.newPrice)
                                        .reduce((a, b) => a + b, 0)
                                        .toFixed(2)
                        }</span>
                    </div>
                </S.Total> 
            </S.TableContainer>
        </>
    )
}

export default CartTable;