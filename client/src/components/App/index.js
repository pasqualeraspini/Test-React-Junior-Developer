import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import ProductsList from '../ProductsList';
import Cart from '../Cart';
import Checkout from '../Checkout';

import * as S from './style';

const App = () => {
    let [stateQty, setStateQty] = useState(1)

    return (
        <>
            <S.AppContainer>
                <nav className="nav">
                    STORE LOGO
                </nav>
                <Route path="/" exact component={ProductsList} />
                <Route path="/cart" render={() => <Cart stateQty={stateQty} setStateQty={setStateQty} />}/>
                <Route path="/checkout" render={() => <Checkout stateQty={stateQty} setStateQty={setStateQty} />} />
            </S.AppContainer>
        </>
    )
}

export default App;