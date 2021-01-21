import { combineReducers } from 'redux';
import { headerReducer } from './headerReducer';
import { productReducer } from './productReducer';
import { searchReducer } from './searchReducer';

export default combineReducers({
    products: productReducer,
    sortSettings: headerReducer,
    search: searchReducer
});
