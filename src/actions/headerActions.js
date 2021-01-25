import { SET_CURRENT_SORT, TOGGLE_EXPLORE_MENU } from './types';

export const setCurrentSort = (data) => (dispatch) => {
    dispatch({ type: SET_CURRENT_SORT, data });
};

export const toggleExploreMenu = (isOpen) => (dispatch) => {
    dispatch({ type: TOGGLE_EXPLORE_MENU, data: { isOpen } });
};
