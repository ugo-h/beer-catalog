import { combineReducers } from 'redux';
import { headerReducer } from './headerReducer';
import { productReducer } from './productReducer';

export default combineReducers({
    products: productReducer,
    sortSettings: headerReducer
});
