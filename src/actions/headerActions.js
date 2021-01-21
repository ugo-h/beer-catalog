import { SET_CURRENT_SORT } from './types';

export const setCurrentSort = (data) => (dispatch) => {
    dispatch({ type: SET_CURRENT_SORT, data });
};
