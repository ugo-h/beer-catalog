import { combineReducers } from 'redux';
import { headerReducer } from './headerReducer';
import { productReducer } from './productReducer';
import { searchReducer } from './searchReducer';
import { pagesReducer } from './pagesReducer';
import { signUpFormReducer } from './signUpFormReducer';

export default combineReducers({
    products: productReducer,
    sortSettings: headerReducer,
    search: searchReducer,
    pages: pagesReducer,
    signUpForm: signUpFormReducer
});
