import React from 'react';
import { useSelector } from 'react-redux';

import RemoveIcon from './RemoveIcon';
import AddIcon from './AddIcon';

const Product = ({
    id,
    model,
    sku,
    selectedSize,
    stateQty,
    setStateQty,
    qtySizeM,
    qtySizeL
}) => {
    // Selezionare l'array di prodotti nel reducer
    const dbProducts = useSelector(state => state.productsReducer.products);

    const addIcon = (id, selectedSize) => {
        return (
            <AddIcon 
                selectedSize={selectedSize}
                stateQty={stateQty}
                setStateQty={setStateQty}
                id={id}
            />
        )
    }

    const renderAddIcon = (id, selectedSize) => {
        const dbProduct = dbProducts[id - 1];

        if (dbProduct.qtySizeL > 0 && dbProduct.selectedSize === "52") return addIcon(id, selectedSize)

        if (dbProduct.qtySizeM > 0 && dbProduct.selectedSize === "50") return addIcon(id, selectedSize)

        return ''
    }

    const renderRemoveIcon = (id, selectedSize) => {
        return (
            <RemoveIcon 
                stateQty={stateQty}
                selectedSize={selectedSize}
                id={id}
            />
        )
    }

    const renderQty = (id, selectedSize) => {
        const dbProduct = dbProducts[id - 1];

        if (selectedSize === "50") return dbProduct.addedQtyM

        return dbProduct.addedQtyL
    }

    const renderPrice = (id, selectedSize) => {
        const dbProduct = dbProducts[id - 1];

        if (selectedSize === "50") return (dbProduct.newPrice * dbProduct.addedQtyM).toFixed(2).replace('.', ',')

        return (dbProduct.newPrice * dbProduct.addedQtyL).toFixed(2).replace('.', ',')
    }

    return (
            <tr className="products"> 
                <td>
                    {model}
                    {renderRemoveIcon(id, selectedSize, qtySizeM, qtySizeL)}
                </td>
                <td>{sku}</td>
                <td>{selectedSize}</td>
                <td>
                    {renderQty(id, selectedSize)}
                    {renderAddIcon(id, selectedSize)}
                </td>
                <td>€ {renderPrice(id, selectedSize)}</td>
            </tr>
    )
}


export default Product;