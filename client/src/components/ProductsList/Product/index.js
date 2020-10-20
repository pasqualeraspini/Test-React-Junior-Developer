import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';

import { useFetching } from '../../../hooks';

import { getProducts, addProductsToCart, removeProductsFromStore, selectSize } from '../../../actions';

import { SmButton } from '../../Buttons';

import * as S from './style';

const Product = ({
    getProducts,
    addProductsToCart,
    removeProductsFromStore,
    selectSize
}) => {
    // Fetching prodotti
    useFetching(getProducts)

    // Selezionare l'array di prodotti nel reducer
    const products = useSelector(state => state.productsReducer.products);

    // Settare la size per re-renderizzare il componente 
    let [size, setSize] = useState(null)

    // Render size selector
    const renderSizeSelect = (sizes, id, qtySizeM, qtySizeL) => {
        if (sizes.length > 1) {
            return (
                <select 
                    onChange={e => {
                        selectSize(id, e.target.value);
                        setSize(e.target.value)
                    }} 
                    className="actions__select-size"
                >
                    <option>Select Size</option>
                    {qtySizeM > 0 ? <option value="50">50 ({qtySizeM} pcs)</option> : ''}
                    {qtySizeL > 0 ? <option value="52">52 ({qtySizeL} pcs)</option> : ''}
                </select>
            )
        }

        return <div></div>
    }

    // Render bottoni e disattivarli se la quantità nel reducer è 0
    const renderButton = (totalQty, products, id, size) => {
        if (totalQty <= 0) {
            return (
                <SmButton disabled />
            )
        }

        return (
            <SmButton
                removeProductsFromStore ={removeProductsFromStore}
                addProductsToCart={addProductsToCart}
                products={products} 
                id={id} 
                size={size}
            />
        )
    }

    const renderMsg = totalQty => {
        if (totalQty === 1) {
            return <span className="msg">Last piece, buy it now!</span>
        }

        if (totalQty <= 3) {
            return <span className="msg">Last pieces available!</span>
        }
    }

    const renderBadge = totalQty => {
        if (totalQty === 1) {
            return <div className="badge">LAST</div>
        }
    }

    return (
        <>
            {products.map(({ id, model, sku, sizes, imgUrl, qtySizeM, qtySizeL, totalQty, oldPrice, newPrice }) => {
                return (
                    <S.ProductCard key={id}>
                        {renderBadge(totalQty)}
                        <div className="product__img">
                            <img src={imgUrl} alt="eyeglasses" />
                        </div>
                        <div className="product">
                            <div className="product__model">
                                {model}
                                <span>{sku}</span>
                            </div>
                            <div className="product__quantity">
                                Qty: <span>{totalQty}</span>
                                {renderMsg(totalQty)}
                            </div>
                            <div className="product__price">
                                Price:
                                {oldPrice ? <span className="product__price--old">€ {oldPrice}</span> : ''}
                                <span>€ {newPrice.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                        <div className="actions">
                            {renderSizeSelect(sizes, id, qtySizeM, qtySizeL)}
                            {renderButton(totalQty, products, id, size)}
                        </div>
                    </S.ProductCard>
                )
            })}
        </>
    )
}

const mapDispatchToProps = {
    getProducts,
    addProductsToCart,
    removeProductsFromStore,
    selectSize
} 

export default connect(null, mapDispatchToProps)(Product);