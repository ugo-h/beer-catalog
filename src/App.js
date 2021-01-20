import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Catalog from './Components/Catalog/Catalog';
import store from './store/store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Catalog />
            </Provider>
        </div>
    );
}

export default App;
