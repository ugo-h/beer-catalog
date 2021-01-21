import { SET_SEARCH_QUERY, SET_SEARCH_TIMER } from './types';

export const setSearchTimer = (timerId) => (dispatch) => {
    dispatch({ type: SET_SEARCH_TIMER, data: { timerId } });
};

export const setSearchQuery = (query) => (dispatch) => {
    dispatch({ type: SET_SEARCH_QUERY, data: { query } });
};
