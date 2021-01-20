import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Catalog from './Components/Catalog/Catalog';
import Header from './Components/Header/Header';
import store from './store/store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Header />
                <Catalog />
            </Provider>
        </div>
    );
}

export default App;
