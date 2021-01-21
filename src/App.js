import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Catalog from './Components/Catalog/Catalog';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import store from './store/store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Header />
                <Catalog />
                <Cart />
            </Provider>
        </div>
    );
}

export default App;
