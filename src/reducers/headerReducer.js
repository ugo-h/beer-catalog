import { SET_CURRENT_SORT } from '../actions/types';

export const initialState = {
    isAcsending: true,
    sortBy: 'name'
};

export function headerReducer(state = initialState, action) {
    switch (action.type) {
    case SET_CURRENT_SORT: return { ...state, ...action.data };
    default: return state;
    }
}
