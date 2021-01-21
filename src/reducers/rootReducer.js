import { combineReducers } from 'redux';
import { headerReducer } from './headerReducer';
import { productReducer } from './productReducer';
import { searchReducer } from './searchReducer';
import { pagesReducer } from './pagesReducer';

export default combineReducers({
    products: productReducer,
    sortSettings: headerReducer,
    search: searchReducer,
    pages: pagesReducer
});
