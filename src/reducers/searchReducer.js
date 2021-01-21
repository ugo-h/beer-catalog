import { SET_SEARCH_QUERY, SET_SEARCH_TIMER } from '../actions/types';

const initialState = {
    timer: null,
    query: ''
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_SEARCH_QUERY: return { ...state, query: action.data.query };
    case SET_SEARCH_TIMER: return { ...state, timer: action.data.timerId };
    default: return state;
    }
};
