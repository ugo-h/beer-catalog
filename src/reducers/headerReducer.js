import { SET_CURRENT_SORT, TOGGLE_EXPLORE_MENU } from '../actions/types';

export const initialState = {
    isAcsending: true,
    sortBy: 'name',
    isExploreMenuOpen: false
};

export function headerReducer(state = initialState, action) {
    switch (action.type) {
    case SET_CURRENT_SORT: return { ...state, ...action.data };
    case TOGGLE_EXPLORE_MENU: return { ...state, isExploreMenuOpen: action.data.isOpen };
    default: return state;
    }
}
